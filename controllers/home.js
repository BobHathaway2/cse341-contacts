const name = {name: "Bob Hathaway"}

const justHome = async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(name.name)
};

module.exports = {justHome};