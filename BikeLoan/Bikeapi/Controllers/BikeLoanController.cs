using Microsoft.AspNetCore.Mvc;
using Bikeapi.Models;

namespace EmpWebApi.Controllers;

[ApiController]
[Route("api/BikeLoan")]
public class BikeLoanController : ControllerBase
{
  //Entities object
  private readonly BikedbContext DB;
  public BikeLoanController(BikedbContext db)
  {
    this.DB = db;
  }

   [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.BikeLoans.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.BikeLoans.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.BikeLoans.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }

  //To add the registration details to the DB
  [HttpPost("InsertDetails")]
  public object InsertDetails(Register Reg)
  {
         string message = ""; 

    try
    {
        BikeLoan List = new BikeLoan();
        if(List.UserName==null)
        {
            List.Id=Reg.BId;
            List.UserName = Reg.BUserName;
            List.Email=Reg.BEmail;
            List.PhoneNumber=Reg.BPhoneNumber;
            List.Password=Reg.BPassword;
            List.ConfirmPassword=Reg.BConfirmPassword;
            //add
             DB.BikeLoans.Add(List);

              
                    int result = this.DB.SaveChanges();
                    if (result > 0)
                    {
                        message = "User has been sucessfully added";
                    }
                    else
                    {
                        message = "failed";
                    }

                     return Ok(message);
            //Add

            //save it in the database
            DB.SaveChanges();

            return new Response{Status="Success" , Message = "Employee Added!"};

        }
    }
    catch(System.Exception)
    {
throw;
    }

    return new Response{Status="Error" , Message="Invalid Information"};
  }

  //Display all employees from db

  [HttpGet("GetAllLoan")]
  public IQueryable<BikeLoan> GetAllLoan()
  {
    try
    {
        return DB.BikeLoans;
    }
    catch(System.Exception)
    {
        throw;
    }
  }


  [HttpPost("Login")]
  public IActionResult LoginCheck(Login LogObj)
  {
 var logindetail = DB.BikeLoans.Where(x=>x.Email.Equals(LogObj.Email)&& x.Password.Equals(LogObj.Password)).FirstOrDefault();    
 if(logindetail == null)
    {
        return Ok(new Response{Status="Not Valid" , Message = "Invalid Credentials!"});
    }
    else
    {
        return Ok(new Response{Status="Success" , Message="Welcome User!"});
    }
  }
}