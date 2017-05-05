using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeduShop.Model.Models;
using TeduShop.Service;
using TeduShop.Web.Infrastructure.Core;

namespace TeduShop.Web.Api
{
    [RoutePrefix("api/postcategory")]
    public class PostCategoryController : ApiControllerBase
    {
        IPostCategoryService _postCategoryServie;

        public PostCategoryController(IErrorService errorService, IPostCategoryService postCategoryService):base(errorService)
        {
            this._postCategoryServie = postCategoryService;
        }
        [Route("getall")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var listCategory = _postCategoryServie.GetAll();
                    _postCategoryServie.Save();

                    response = request.CreateResponse(HttpStatusCode.OK, listCategory);
                }
                return response;

            });
        }

        public HttpResponseMessage Post(HttpRequestMessage request,PostCategory postCategory)
        {
            return CreateHttpResponse(request, () =>
             {
                 HttpResponseMessage response = null;
                 if (ModelState.IsValid)
                 {
                     request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                 }
                 else
                 {
                    var category= _postCategoryServie.Add(postCategory);
                     _postCategoryServie.Save();

                     response = request.CreateResponse(HttpStatusCode.Created, category);
                 }
                 return response;

             });
        }


        public HttpResponseMessage Put(HttpRequestMessage request, PostCategory postCategory)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    _postCategoryServie.Update(postCategory);
                    _postCategoryServie.Save();

                    response = request.CreateResponse(HttpStatusCode.OK);
                }
                return response;

            });
        }

        public HttpResponseMessage Delete(HttpRequestMessage request, int id)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;
                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    _postCategoryServie.Delete(id);
                    _postCategoryServie.Save();

                    response = request.CreateResponse(HttpStatusCode.Created);
                }
                return response;

            });
        }
    }
}