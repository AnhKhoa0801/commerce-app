using System.Diagnostics;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace API.ExceptionHandler;

public class GlobalExceptionHandler : IExceptionHandler
{
	private readonly ILogger<GlobalExceptionHandler> _logger;
	private readonly IHostEnvironment _env;

	public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger, IHostEnvironment env)
	{
		_logger = logger;
		_env = env;
	}
	public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
	{

		var problemDetails = new ProblemDetails
		{
			Detail = exception.Message,
			Type = "https://tools.ietf.org/html/rfc7231#section-6.6.1",
		};

		switch (exception)
		{
			case NotFoundException:
				problemDetails.Status = (int)HttpStatusCode.NotFound;
				problemDetails.Title = "Resource Not Found";
				problemDetails.Extensions.Add("message", exception.Message);
				break;
			default:
				_logger.LogError(exception, exception.Message);
				problemDetails.Status = (int)HttpStatusCode.InternalServerError;
				problemDetails.Detail = _env.IsDevelopment() ? exception.StackTrace : null;
				problemDetails.Title = "Internal Server Error";
				break;
		}

		var response = httpContext.Response;

		response.ContentType = "application/problem+json";
		response.StatusCode = problemDetails.Status ?? (int)HttpStatusCode.InternalServerError;

		var options = new JsonSerializerOptions
		{
			PropertyNamingPolicy = JsonNamingPolicy.CamelCase
		};

		var json = JsonSerializer.Serialize(problemDetails, options);

		await response.WriteAsync(json, cancellationToken);

		return true;
	}
}
