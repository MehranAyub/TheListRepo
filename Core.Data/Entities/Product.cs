using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Title { get; set; }=String.Empty;
        public string Price { get; set; }=String.Empty;
        public string? StoreLink { get; set; }
        public string? Image { get; set; }
        public Guid CategoryId { get; set; }
        public Category? Category { get; set; }

    }
}
