# Operator Control
The operator control program used to feed information back and forth between humans and the rover.

## Requirements
* Docker

## Building
1. Clone the repository ```git clone https://github.com/ku-rover-club/operator-control```
2. Build the docker image ```docker build -t operator-console .```

## Running
1. Run the console ```docker run --rm -d --network host operator-console:latest```
2. Open [http://localhost:3000](http://localhost:3000)
