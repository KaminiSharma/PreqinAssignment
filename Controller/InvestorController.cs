using System;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http;
using PreqinAssignment.Model;
using PreqinAssignment.Data;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Newtonsoft.Json;


    


namespace PreqinAssignment.Controller
{
    [ApiController]
    [Route("Investors")]
    
    public class InvestorController : ControllerBase
	{
       
            private readonly InvestorDbContext _context;

        private readonly CommitmentDbContext _commitmentDbContext;
       


        public InvestorController(InvestorDbContext context, CommitmentDbContext commitmentDbContext)
            {
                _context = context;
            _commitmentDbContext = commitmentDbContext;
           
        }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<InvestorResponse>>> Get()


            {
          
           
            var investorsDb = await _context.Investor.ToListAsync(); // get Investor details
            var commitmentDb = await _commitmentDbContext.commitments.ToListAsync(); // get commitment details
            var investorCommitments = commitmentDb.GroupBy(x => x.investor_id)
                            .Select(g => new
                            {
                                InvestorId = g.Key,
                                TotalCommitment = g.Sum(x => decimal.Parse(x.commitment_amount))
                            }); // group commitment details per investor

            //Map investor to Response data model

            var investorsResponse = investorsDb.Select(i => new InvestorResponse
            {
                Id = i.investor_id,
                Name = i.investor_name,
                Type = i.investory_type,
                DateAdded = i.investor_date_added,
                Address = i.investor_country,
                TotalCommitments = investorCommitments.FirstOrDefault(c => c.InvestorId == i.investor_id).TotalCommitment.ToString() // mapping the total commitments value per investor



            }).ToList();

            return Ok(investorsResponse);


        }

        


    }

   

}


