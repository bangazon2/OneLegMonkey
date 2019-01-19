using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon2.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bangazon2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : Controller
    {
        private ProductTypeStorage _productTypeStorage;

        public ProductTypeController(IConfiguration config)
        {
            _productTypeStorage = new ProductTypeStorage(config);
        }

        [HttpGet("producttypes")]
        public IActionResult GetAllProductTypes()
        {
            return Ok(_productTypeStorage.GetAllProductTypes());
        }

    }
}
