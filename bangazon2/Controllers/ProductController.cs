﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bangazon2.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace bangazon2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        // pass configuration thru to storage
        private readonly ProductStorage _productStorage;

        public ProductController(IConfiguration config)
        {
            _productStorage = new ProductStorage(config);
        }

        // GET
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productStorage.GetAllProducts());
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            return Ok(_productStorage.GetById(id));
        }
    }
}