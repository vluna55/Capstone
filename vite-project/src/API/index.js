const APIURL = "https://fakestoreapi.com";

export async function getProducts() {
    try {
      const response = await fetch(`${APIURL}/products`);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  export async function getSingleProduct() {
    try {
        const response = await fetch(`${APIURL}/products/1`);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
  }

  export async function signup(fName, lName, email, password) {
    console.log(fName, lName, email, password);
    const firstname = fName;
    const lastname = lName;
    try {
      const response = await fetch(`${APIURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  export async function login(username, password) {
    try {
      const response = await fetch(`${APIURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(result.token);
      return result.token;
    } catch (error) {
      console.error(error);
    }
  }