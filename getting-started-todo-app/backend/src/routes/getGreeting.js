const GREETING = 'Hola Mundo! - Taller 7';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
