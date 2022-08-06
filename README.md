# NammaBMTC
Build Future Cities: 24hr Bangalore Hackathon Project.

**Introduction**
The growing metropolitan population of Bengaluru city depends highly on public transportation for daily commute. This increase in demand has also increased transit management responsibilities and requires 'transparency' in transit availability and movement. Digitization of services has enabled people to track the status and activity of e-commerce deliveries, food deliveries, and cab rides, allowing them to plan and schedule their day accordingly. This also allows the respective service providers to collect user data, analyze users' behaviors and needs and make necessary amends in business models.
The primary aim of the proposed project is to extend Bangalore Metropolitan Transport Corporation (BMTC) services to this level of public transparency and collection of people movement information to help improve decision-making in BMTC management.

**Technological Solution**
The proposed project involves a web application backed by blockchain to let users (commuters) know the availability of BMTC buses on their route, their location, seating availability, and an estimated arrival time that helps them plan their trip. 
From the BMTC operators’ perspective, it utilizes people movement information to perform data analysis by running a predictive algorithm that will allow operators to understand the transit traffic through the busiest routes and during peak hours. This will subsequently help BMTC to make better bus schedules and allocate resources accordingly.


# Data Pipeline

![screenshot](https://raw.githubusercontent.com/AshwinKumar-V/NammaBMTC/main/data%20pipeline%20namma%20bmtc.jpg?token=GHSAT0AAAAAABWFTSC4UHHYUFJCIAYOJFPQYXOIC5A)


Features:
Blockchain
The proposed Blockchain system would collect data such as ‘Station Name,’ ‘The total number of commuters entering and existing,’ ‘Capacity of the bus,’ ‘Bus type,’ and ‘Timestamp’ from the Electronic Ticketing Machine used by conductors and store the data in the smart contract. 
This data is securely stored in the public Ethereum network and is used for further inference and analysis. 
The citizens would be given READ access to the public Ethereum network so that public transport information can be transparent.
The deployer, i.e., the BMTC operator would be able to add or remove Electronic Ticketing Machine (ETM) addresses that can write the data to the smart contract.
Admin interface
View statistical visualization of bus crowds during various times of the day, on multiple routes, and in different classes of buses for better transit traffic management.
View predictive analysis on commuter details based on historical data on a time series.
Detect any anomalies in the behavior of the commuter pattern from specific endpoints (bus stations) using a well-trained Neural Network (LSTM -RNN).
Commuter interface
Track bus location, seat availability, and estimated arrival time for all buses on the commute route.
View statistical visualization of bus crowds during various times of the day, on multiple routes, and in different classes of buses for better trip planning.

Tech Stack:
Frontend: Angular12 (JavaScript)
Data analysis and Prediction: Django server (Python)
Blockchain: Smart Contracts (Solidity), Metamask, Ethereum
