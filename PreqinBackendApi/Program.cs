using Microsoft.EntityFrameworkCore;
using PreqinAssignment.Data;
using Swashbuckle.AspNetCore.SwaggerUI;




using Microsoft.OpenApi.Models;






var builder = WebApplication.CreateBuilder(args);


// Entity framework core
builder.Services.AddDbContext<InvestorDbContext>(options =>
    options.UseSqlite("Data Source=./SqlLite/preqinDb.db")); // Database file path

builder.Services.AddDbContext<CommitmentDbContext>(options =>
    options.UseSqlite("Data Source=./SqlLite/preqinDb.db"));

builder.Services.AddDbContext<AssetDbContext>(options =>
    options.UseSqlite("Data Source=./SqlLite/preqinDb.db"));

//CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:3000"
                                );
        });
});
var configuration = builder.Configuration;



//Services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();



var app = builder.Build();




// Middleware
app.UseHttpsRedirection();
app.UseCors();

//Routing
app.MapControllers();


app.Run();


