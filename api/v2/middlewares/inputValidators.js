class ValidateInput {
  static partyInput(req, res, next) {
    const {
      partyName,
      hqAddress,
      logoUrl,
    } = req.body;
      // const validname = /^[a-zA-Z\-]+$/.test(partyName);
    if (typeof partyName !== 'string') {
      return res.status(400)
        .json({ error: 'partyName input should be a string' });
    }
    if (!partyName) {
      return res.status(400).json({ error: 'partyName must be a string!' })
        .end();
    }
    if (partyName.length === '') {
      return res.status(400)
        .json({ error: 'partyName must not be empty' });
    }
    if (partyName.trim() === '') {
      return res.status(400)
        .json({ error: 'partyName must not contain whitespaces at the beginning and at the end' });
    }
    if (partyName.trim().length < 8) {
      return res.status(400)
        .json({ error: 'partyName must not contain whitespaces, and minimum length of 8' });
    }
    if (partyName.length < 8) {
      return res.status(400).json(
        { error: 'partyName must be a string with minimum 8 characters' },
      )
        .end();
    }
    if (partyName.length > 100) {
      return res.status(400).json({ error: 'partyName must be a string with maximum 100 characters' })
        .end();
    }
    if (!(/^[A-Za-z ]+$/.test(partyName))) {
      return res.status(400)
        .json({ error: 'partyName input should be a string without number or special characters' });
    }
    if (!hqAddress) {
      return res.status(400).json('hqAddress must be a string')
        .end();
    }

    if (typeof hqAddress !== 'string') {
      return res.status(400)
        .json({ error: 'hqAddress input should be a string' });
    }
    if (hqAddress.length === '') {
      return res.status(400)
        .json({ error: 'hqAddress must not be empty' });
    }
    if (hqAddress.trim() === '') {
      return res.status(400)
        .json({ error: 'hqAddress must not contain whitespaces at the beginning and at the end' });
    }
    if (hqAddress.trim().length < 7) {
      return res.status(400)
        .json({ error: 'hqAddress must not contain whitespaces, and minimum length of 7' });
    }

    if (hqAddress.length < 7) {
      return res.status(400).json({ messge: 'hqAddress must be a string with minimum 7 characters' })
        .end();
    }
    if (hqAddress.length > 50) {
      return res.status(400).json({ error: 'hqAddress must be a string with maximum 50 character ' })
        .end();
    }

    if (typeof logoUrl !== 'string') {
      return res.status(400)
        .json({ error: 'logoUrl input should be a string' });
    }
    if (logoUrl instanceof String) {
      return res.status(400)
        .json({ error: 'logoUrl input should be a string' });
    }
    if (logoUrl.length === '') {
      return res.status(400)
        .json({ error: 'logoUrl must not be empty' });
    }
    if (!logoUrl) {
      return res.status(400).json({ error: 'logUrl must be a string' })
        .end();
    }
    if (logoUrl.length < 8) {
      return res.status(400).json({ error: 'logUrl must be a string with minimum 8 characters' })
        .end();
    }
    if (logoUrl.length > 70) {
      return res.status(400).json({ error: 'logUrl must be a string with maximum 70 character ' })
        .end();
    }
    next();
  }

  static officeInput(req, res, next) {
    const {
      type,
      officeName,
    } = req.body;

    if (typeof type !== 'string') {
      return res.status(400)
        .json({ error: 'type input should be a string' });
    }
    if (type.length === '') {
      return res.status(400)
        .json({ error: 'type must not be empty' });
    }
    if (type.trim() === '') {
      return res.status(400)
        .json({ error: 'type must not contain whitespaces at the beginning and at the end' });
    }
    if (type.trim().length < 8) {
      return res.status(400)
        .json({ error: 'type must not contain whitespaces, and minimum length of 8' });
    }
    if (!type) {
      return res.status(400).json('type must be a string should not empty')
        .end();
    }
    if (type.length < 6) {
      return res.status(400).json({ messge: 'type must be a string with minimum 6 characters' })
        .end();
    }
    if (type.length > 50) {
      return res.status(400).json({ error: 'type must be a string with maximum 50 character ' })
        .end();
    }
    if (!(/^[A-Za-z ]+$/.test(type))) {
      return res.status(400)
        .json({ error: 'officeName input should be a string without number or special characters' });
    }
    if (typeof officeName !== 'string') {
      return res.status(400)
        .json({ error: 'officeName input should be a string' });
    }
    if (officeName.length === '') {
      return res.status(400)
        .json({ error: 'officeName must not be empty' });
    }
    if (!officeName) {
      return res.status(400).json({ error: 'officeName must be a string and should not be empty!' })
        .end();
    }
    if (officeName.trim() === '') {
      return res.status(400)
        .json({ error: 'officeName must not contain whitespaces at the beginning and at the end' });
    }
    if (officeName.trim().length < 8) {
      return res.status(400)
        .json({ error: 'officeName must not contain whitespaces, and minimum length of 8' });
    }
    if (officeName.length < 8) {
      return res.status(400).json(
        { error: 'officeName must be a string with minimum 8 characters' },
      )
        .end();
    }
    if (officeName.length > 100) {
      return res.status(400).json({ error: 'officeName must be a string with maximum 100 characters' })
        .end();
    }
    if (!(/^[A-Za-z ]+$/.test(officeName))) {
      return res.status(400)
        .json({ error: 'officeName input should be a string without number or special characters' });
    }
    next();
  }

  static validateId(req, res, next) {
    const { id } = req.params;
    const parsedId = parseInt(id, 10);
    if (id.length === '') {
      return res.status(400).json({ error: '"ID" should not be empty!' })
        .end();
    }
    if (Number.isNaN(parsedId) === true) {
      return res.status(400).json({
        error: 'PartyId must be a number',
      });
    }
    next();
  }
}
export default ValidateInput;
