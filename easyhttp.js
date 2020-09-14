function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// make an HTTP GET request
let self = this;
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback("Error:" + this.http.status);
    }
  };
  this.http.send();
};

// make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// make an HTTP PUT request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
// make an HTTP DELETE request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, "post deleted");
    } else {
      callback("Error:" + this.http.status);
    }
  };
  this.http.send();
};
