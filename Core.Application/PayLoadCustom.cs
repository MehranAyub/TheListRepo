﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application
{
    public class PayloadCustom<T>
    {
        public T Entity { get; set; }

        /// <summary>
        /// Gets or sets the view model list.
        /// </summary>
        /// <value>
        /// The view model list.
        /// </value>
        public List<T> EntityList { get; set; }

        [DefaultValue(0)]
        public int TotalRecords { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is success.
        /// </summary>
        /// <value>
        /// <c>true</c> if this instance is success; otherwise, <c>false</c>.
        /// </value>
        public int Status { get; set; }

        public string Message { get; set; } = string.Empty;
        public string[] ErrorMessage { get; set; }
    }
}
