import Airtable from "airtable";

let modulePromise;

const apiKey = process.env.GATSBY_AIRTABLE;

const getRecord = async ({ email, table, airBase }, promise) => {
  modulePromise = promise;
  try {
    const base = await new Airtable({ apiKey }).base(airBase);
    let result;
    await base(table)
      .select({
        filterByFormula: `email = '${email}'`
      })
      .eachPage(
        function page(records, fetchNextPage) {
          if (records && records.length > 0) {
            result = {
              id: records[0].fields.id,
              email: records[0].fields.email,
              recordId: records[0].id,
              score: records[0].fields.score
            };
          }
          fetchNextPage();
        },
        function done(error) {
          modulePromise.resolve(result);
        }
      );
    if (result) {
      modulePromise.resolve(result);
    }
  } catch (exception) {
    modulePromise.reject({
      type: "handleGetRecord.getRecord",
      reason: exception
    });
  }
};

export const handleGetRecord = ({ email, table, airBase }) =>
  new Promise((resolve, reject) => {
    getRecord({ email, table, airBase }, { resolve, reject });
  });

const updateAirtable = ({ id, fields, table, airBase }, promise) => {
  modulePromise = promise;
  try {
    const base = new Airtable({ apiKey }).base(airBase);
    base(table).update(id, fields, function(err, record) {
      if (err) {
        console.error(err);
        modulePromise.reject(err);
      }
      modulePromise.resolve(record.get("id"));
    });
  } catch (exception) {
    modulePromise.reject({
      type: "handleUpdateAirtable.updateAirtable",
      reason: exception
    });
  }
};

export const handleUpdateAirtable = ({ id, fields, table, airBase }) =>
  new Promise((resolve, reject) => {
    updateAirtable({ id, fields, table, airBase }, { resolve, reject });
  });

const sendToAirtable = ({ fields, table, airBase }, promise) => {
  modulePromise = promise;
  try {
    const base = new Airtable({ apiKey }).base(airBase);
    base(table).create(fields, function(err, record) {
      if (err) {
        modulePromise.reject(err);
      }
      modulePromise.resolve(record.id);
    });
  } catch (exception) {
    modulePromise.reject({
      type: "handleSendToAirtable.sendToAirtable",
      reason: exception
    });
  }
};

const handleSendToAirtable = ({ fields, table, airBase }) =>
  new Promise((resolve, reject) => {
    sendToAirtable({ fields, table, airBase }, { resolve, reject });
  });

export default handleSendToAirtable;
