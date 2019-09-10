﻿using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
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
            var movies = db.Movies.ToArray();
            return new string[movies.Length];
        }

        // GET api/values/5
        public string Get(int id)
        {
            // Retrieve movie by id from db logic
            var moviesInList = db.Movies.Where(m => m.MovieId == id).Single();
            return "value";
        }
        [HttpPost]
        // POST api/values
        public void Post([FromBody]Movie value)
        {
            // Create movie in db logic
            db.Movies.Add(value);
            db.SaveChanges();
        }
        
        // PUT api/values/5
        [HttpPut]
        public void Put(int id, [FromBody]string value)
        {
            // Update movie in db logic
            var movieToEdit = db.Movies.Where(m => m.MovieId == id).Select();
        }

        // DELETE api/values/5
        [HttpDelete]
        public void Delete(int id)
        {
            // Delete movie from db logic
            var movieToDelete = db.Movies.Find(id);
            db.Movies.Remove(movieToDelete);
            db.SaveChanges();
        }
    }

}