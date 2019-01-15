using bangazon2.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon2.DataAccess
{
    public class CustomerAccess
    {
        private string ConnectionString;

        public CustomerAccess(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public bool AddCustomer(Customer customer)
        {
            using(var dbConnection = new SqlConnection(ConnectionString))
            {
                dbConnection.Open();

                var result = dbConnection.Execute(@"INSERT INTO Customer (FirstName,LastName,IsActive,FirebaseId) 
                                                    VALUES (@FirstName,@LastName,@IsActive,@FirebaseId);", customer);

                return result == 1;
            }
        }
    }
}
