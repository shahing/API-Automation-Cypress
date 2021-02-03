describe('API Testing Using Cypress', function(){
  it('Validate a GET request', function(){
    cy.request({
      method : 'GET',
      url : 'https://httpbin.org/get',
    }).then(function(response){
      expect(response.body).have.property('url');
      expect(response.body).have.property('=');
    });
  });

  it('Validate a POST request', function(){
    cy.request({
      method : 'POST',
      url : 'https://httpbin.org/post',
      body : {
        'name' : 'Shahin',
        'age' : 27
      },
     headers : {
       'content-type' : 'application/json'
     }
    }).then(function(response){
      expect(response.body).have.property('json');
      expect(response.body.json).to.deep.equal({
        "name" : "Shahin",
        "age" : 27

      });
    });
  });

  it('Validate a PUT request', function(){
    cy.request({
      method : 'PUT',
      url : 'https://httpbin.org/put',
      body : {
        'name' : 'Ghazala',
        'age' : 28
      },
     headers : {
       'content-type' : 'application/json'
     }
    }).then(function(response){
      expect(response.body).have.property('json');
      expect(response.body.json).to.deep.equal({
        "name" : "Ghazala",
        "age" : 28

      });
    });
  });

  it('Validate a PATCH request', function(){
    cy.request({
      method : 'PATCH',
      url : 'https://httpbin.org/patch',
      body : {
        'name' : 'Ghazala',
        'Profession': 'Tester',
        'age' : 28
      },
     headers : {
       'content-type' : 'application/json'
     }
    }).then(function(response){
      expect(response.body).have.property('json');
      expect(response.body.json).to.deep.equal({
        "name" : "Ghazala",
        "Profession" : "Tester",
        "age" : 28

      });
    });
  });

  it('Validate a DELETE request', function(){
    cy.request({
      method : 'DELETE',
      url : 'https://httpbin.org/delete',
    }).then(function(response){
      expect(response.body.json).to.equal(null);
    });
  });


});
