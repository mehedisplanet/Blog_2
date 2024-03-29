const handleContact = (event) => {
  event.preventDefault();
  const name = getValue("name");
  const email = getValue("email");
  const phone = getValue("phone");
  const message = getValue("message");
  const info = {
    name,
    email,
    phone,
    message
  };
  console.log(info);
  
  fetch("https://blog-w6km.onrender.com/contact_us/",
  {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(info), 
  })
  .then((res) =>res.json())
  .then((data) => console.log(data))
}