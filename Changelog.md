### 0.2.7
- Bug Fix: Return 0 when GET total from not found hit search
- Bug Fix: Return 0 when GET total from not found rate search

### 0.2.6
- Using parseInt because cluster needs integer value for cluster.liste(port)
- Added production configuration to express app config

### 0.2.5
- Added cluster support

### 0.2.4
- Update database-cleaner to 0.2.0

### 0.2.3
- Write only one record for the same hour
- Update mongoose to 1.0.10

### 0.2.2
- Added rate count for thumbs up

### 0.2.1
- Extracted database cleaner to a npm package
- Using node-database-cleaner to clean mongodb after tests

### 0.2.0
- Record ratings
- Use cookie to prevent an user to rate more than one time in the same context/subject/id
- Updated mongoose to 1.0.0
- Route to get hit count

### 0.1.0
- Record hits
- Test structure 

