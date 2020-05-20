To generate self signed certificate:

This is what worked:

openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")


then configure your local web server with localhost.crt and localhost.key, and install localhost.crt(AKA go to KeyChain access and import .crt file and set permissions to Trust)
