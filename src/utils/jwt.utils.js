const jwt = require('jsonwebtoken');
const fs = require('fs');

const PRIVATE_KEY = fs.readFileSync(process.cwd() + '/firstrack.pem');

class JwtHelper {

    algorithm = 'RS256';

    /**
     * 
     * @param {*} algorithm 
     * @returns 
     */
    setAlgorithm(algorithm) {
        this.algorithm = algorithm;
        return this;
    }

    /**
     * 
     * @param {*} payload 
     * @returns 
     */
    generateToken(payload) {
        return jwt.sign(payload, PRIVATE_KEY, { algorithm: this.algorithm });
    }

    /**
     * 
     * @param {*} token 
     * @returns 
     */
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            try {
                jwt.verify(token, PRIVATE_KEY, { algorithms: [this.algorithm] }, (err, decoded) => {
                    if (!err) {
                        resolve(decoded);
                    } else {
                        reject(err)
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

const jwtHelper = new JwtHelper();
module.exports = jwtHelper;