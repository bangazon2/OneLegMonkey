using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon2.DataAccess;
using bangazon2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace bangazon2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private CustomerAccess _customerAccess;

        public CustomerController(IConfiguration config)
        {
            _customerAccess = new CustomerAccess(config);
        }

        [HttpPost("AddCustomer")]
        public IActionResult GetAllComputers(Customer customer)
        {
            return Ok(_customerAccess.AddCustomer(customer));
        }
    }
}