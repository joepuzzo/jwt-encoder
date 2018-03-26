# JWT Encoder

## Intro

A command line tool for encoding a jwt token

## Install

```
npm install -g jwt-encoder
```

## Usage

```
jwt encode -kf private_key.pem -a RS256 -if test.json
```

### Arguments

| Flag            | Required        | Example Arg  |  Default | 
| ----------------|-----------------|--------------|----------|
| decode/encode   |  No             | decode       | encode   |
| -a --alg        |  No             | RS256        | HS256    |
| -kf --keyfile   |  Yes if RSA     | private.pem  | N/A      |
| -k --key        |  Yes if HS      | secret       | N/A      |
| -if --input-file|  Yes if encoding| secret       | N/A      |

