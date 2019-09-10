using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {

        public ApplicationDbContext db;

        public MovieController()
        {
            db = new ApplicationDbContext();
        }
        // GET api/values
        public IEnumerable<string> Get()
        {
            // Retrieve all movies from db logic
            return new string[] { "movie1 string", "movie2 string" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            // Retrieve movie by id from db logic
            return "value";
        }
        [HttpPost]
        // POST api/values
        public void Post([FromBody]Movie value)
        {
            db.Movies.Add(value);
            db.SaveChanges();
            // Create movie in db logic

        }
        [HttpPut]
        // PUT api/values/5
        public void Put(int id, [FromBody]Movie value)
        {
            var movieToEdit = db.Movies.Find(id);
            movieToEdit.Title = value.Title;
            movieToEdit.Genre = value.Genre;
            movieToEdit.Director = value.Director;
            db.SaveChanges();
        }

        [HttpDelete]
        // DELETE api/values/5
        public void Delete(int id)
        {
            var movieToDelete = db.Movies.Find(id);
            db.Movies.Remove(movieToDelete);
            db.SaveChanges();
        }
    }

}