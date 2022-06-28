var builder = WebApplication.CreateBuilder(args);
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins, builder =>
    {
        options.AddPolicy("AllowAnyOrigin",
            builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.UseCors(options =>
          options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.MapFallbackToFile("index.html"); ;

app.Run();
