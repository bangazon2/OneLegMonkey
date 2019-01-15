using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon2.Models
{
    public class Products
    {
        public int Id {get; set;}
        public int ProductTypeId { get; set; }
        public float Price { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
    }
}
