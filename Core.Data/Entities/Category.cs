using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Entities
{
    public class Category
    {
        public Guid Id { get; set; }
        public string   Title { get; set; }=String.Empty;

    }
}
