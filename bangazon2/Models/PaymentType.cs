﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bangazon2.Models
{
    public class PaymentType
    {
        public int Id { get; set; }
        public string PaymentTypeName { get; set; }
        public int CustomerId { get; set; }
    }
}