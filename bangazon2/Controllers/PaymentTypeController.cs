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
    public class PaymentTypeController : ControllerBase
    {
        private PaymentTypeStorage _storage;

        public PaymentTypeController(IConfiguration config)
        {
            _storage = new PaymentTypeStorage(config);
        }

        [HttpGet()]
        public IActionResult GetAllPaymentTypes()
        {
            var result = _storage.GetAll();
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetPaymentTypeById(int id)
        {
            var result = _storage.GetById(id);
            return Ok(result);
        }

        [HttpPost]
        public void AddPaymentType(PaymentType paymentType)
        {
            _storage.Add(paymentType);
        }

        [HttpPut("edit/{id}")]
        public IActionResult UpdatePaymentType(int id, PaymentType paymentType)
        {
            var result = _storage.Update(id, paymentType);
            return Ok(result);
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeletePaymentType(int id)
        {
            var result = _storage.Delete(id);
            return Ok(result);
        }
    }
}