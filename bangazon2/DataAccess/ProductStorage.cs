using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon2.Models;
using System.Data.SqlClient;

namespace bangazon2.DataAccess
{
    public class ProductStorage
    {
        private string ConnectionString;

        public ProductStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        // Get Products
        public IEnumerable<Products> GetAllProducts()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();

                var results = db.Query<Products>("select * from Product");
                return results.ToList();
            }
        }
    }
}
