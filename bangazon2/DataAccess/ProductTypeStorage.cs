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
    public class ProductTypeStorage
    {
        private readonly string ConnectionString;

        public ProductTypeStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public List<ProductType> GetAllProductTypes()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<ProductType>(@"SELECT * FROM ProductType");

                return result.ToList();
            }
        }
    }
}
