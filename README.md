# URL Hashing Service

## Description

This project is a URL shortening service built with Node.js, Express, and MongoDB, utilizing TypeScript for type safety and enhanced developer experience. The service provides unique hash generation for each URL, UTM tracking for campaigns and events, and user tracking for data analysis.

## Features

- **Unique Hash Generation**: Each unique URL receives a distinct hash. The same URL will generate the same hash, avoiding duplication.
- **URL Validity**: Hashes are valid for a configurable number of accesses.
- **UTM Tracking**: Track URLs for different campaigns and events using UTM parameters.
- **User Tracking**: Capture user data for future product evaluation.

## Prerequisites

To run this project, you need to have the following installed:

- Node.js
- Nodemon
- TypeScript
- `tsc` (TypeScript compiler)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tweniee/UrlShorterWithUTMTracking
   ```

2. Navigate to the project directory:

   ```bash
   cd UrlShorterWithUTMTracking
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run start
   ```

## Contributing

Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](github.com/tweniee) file for details.
