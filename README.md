amass-etc-passwd
================

A module for amass to read passwd and group info

See [node-etc-passwd](https://github.com/bahamas10/node-etc-passwd)

Installation
------------

1. Install [amass](https://github.com/bahamas10/node-amass)
2. `[sudo] amass --add amass-etc-passwd`
3. run `amass`

Example
-------

Add this plugin to amass to get passwd and group info

``` json
{
  "users": [
    {
      "username": "nobody",
      "password": "*",
      "uid": -2,
      "gid": -2,
      "comments": "Unprivileged User",
      "home": "/var/empty",
      "shell": "/usr/bin/false"
    },
    {
      "username": "root",
      "password": "*",
      "uid": 0,
      "gid": 0,
      "comments": "System Administrator",
      "home": "/var/root",
      "shell": "/bin/sh"
    },
    { ... }
  ],
  "groups": [
    {
      "groupname": "nobody",
      "password": "*",
      "gid": -2,
      "users": []
    },
    {
      "groupname": "nogroup",
      "password": "*",
      "gid": -1,
      "users": []
    },
    { ... }
  ]
}
```

License
-------

MIT
