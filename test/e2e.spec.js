/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

const httpServer = app.listen(8888);

const url = 'http://localhost:8888';


describe('express', function() {
  this.timeout(6500);
  
  beforeEach(() => {
    nightmare = new Nightmare();
    //pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });


  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('should contain a <button> element for the search page', () => 
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('button').innerText)
      .then(buttonText => {
        expect(buttonText).to.equal('Search');
      })
  );

  it('should contain an <button> element to with a name of searchButton', () =>{
    nightmare
    .evaluate(() => document.querySelector('button[name=searchButton]'))
  });

 

  it('should contain an <input> element to search for movies', () =>{
    nightmare
    .evaluate(() => document.querySelector('input[name=movieSearch]'))
  });

  it('should be able to search for movies', () => {
    nightmare
      .goto(url)
      .type('#search', 'thor')
      .click('#searchButton')
      .evaluate(() => document.querySelector('Link').innerText)
      .then(link => {
        expect(link).to.equal('More Details');
      })
  })

  it('should be able to return movies', () => {
    nightmare
      .goto(url)
      .type('#search', 'thor')
      .click('#searchButton')
      .evaluate(() => document.querySelector('div[id=jumbotron]'))

  });

  it('should be able to search for movies titles', () => {
    nightmare
      .goto(url)
      .type('#search', 'thor')
      .click('#searchButton')
      .evaluate(() => document.querySelector('div[name=movie-title]').innerText)
      .then(title => {
        expect(title).to.equal('Thor');
      })
  })

  it('should be able to search for movies titles', () => {
    nightmare
      .goto(url)
      .type('#search', 'thor')
      .click('#searchButton')
      .evaluate(() => document.querySelector('h4[id=movie-year]').innerText)
      .then(year => {
        expect(year).to.equal(2011);
      })
  })

  it('should be able to get details', () => {
    nightmare
      .goto(url)
      .type('#search', 'thor')
      .click('#searchButton')
      .click('#getDetails')
      .evaluate(() => document.querySelector('h3[id=movie-year]').innerText)
      .then(year => {
        expect(year).to.equal(thor);
      })
  })
    

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
