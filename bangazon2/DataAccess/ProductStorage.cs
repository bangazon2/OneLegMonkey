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

        // Get All Products
        public IEnumerable<Products> GetAllProducts()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();

                var results = db.Query<Products>("select * from Product");
                return results.ToList();
            }
        }

        // Get Last 20 Products
        public IEnumerable<Products> GetLatestProducts()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                db.Open();

                var results = db.Query<Products>("SELECT TOP 20 * FROM Product ORDER BY id DESC");
                return results.ToList();
            }
        }
    }
}
