using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BooksAPI.Models
{
    public class Books
    {
        [Key]
        public int IdBook { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }
        [Column(TypeName = "nvarchar(500)")]
        public string Description { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Author { get; set; }
    }
}
