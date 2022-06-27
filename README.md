# nodejs-google-news-observer-client

## Examples

### Loading the list of semantic kernel events

```javascript
const Reference = require("./main");

const reference = new Reference("http://34.239.11.167:85");
const eventsPromise = reference.event().list("6232623f64bd68001d0a2ac1");
eventsPromise.then((results) => {
  console.log(results);
});
```

### Loading & grouping the list of semantic kernel events and their augmentations

```javascript
const Reference = require("./main");

const reference = new Reference("http://34.239.11.167:85");
const eventsPromise = reference.event().list("6232623f64bd68001d0a2ac1");
eventsPromise.then((results) => {
    results = Reference.groupByKey(results, "hash");
    console.log(results);
});
```

As a result, you get an associated array of items grouped by event hash. 
This includes original content and augmentations.
For augmentations the following additional fields are given:
- "**culture**" - the culture of this augmentation item;
- "**augmenter**" - an algorithm which was used to build this augmentation.
```json
{
  "26b9a30da32c6aa8756906a9fc832d3d": [
    {
      "_id": "62ba0807dfca75cd1304bc05",
      "hash": "26b9a30da32c6aa8756906a9fc832d3d",
      "uri": "https://www.fiercebiotech.com/biotech/new-data-finds-clovers-covid-booster-bolsters-antibody-levels-against-omicron",
      "date": "2022-06-27T15:55:36.000Z",
      "text": "Clover's COVID booster bolsters antibody levels against omicron - FierceBiotech"
    },
    {
      "_id": "62ba08d791fb0c9da853f689",
      "hash": "26b9a30da32c6aa8756906a9fc832d3d",
      "uri": "https://www.fiercebiotech.com/biotech/new-data-finds-clovers-covid-booster-bolsters-antibody-levels-against-omicron",
      "date": "2022-06-27T15:55:36.000Z",
      "text": "Clover Health's new COVID-19 booster bolsters antibody levels against omicron - FierceBiotech Clover Health today announced it is the first company to offer a vaccine that significantly augments the antibody response against omicron, one of the most common strains of influenza D.\nClover Therapeutics announced positive Phase 2a data for its COVID-19 Booster vaccine showing that the vaccine delivered effective immune boosting. Clover’s booster bolsters antibody levels against omicron and that could help women who want to delay their pregnancies or avoid it altogether.\nClover's COVID-19 booster bolsters antibody levels against omicron- 1 & 6 in patients, who had not responded to treatment with other options. Published study shows results were comparable to those achieved with the most effective vaccines and boosters available.\nClover’s C5IVD-19a-0043 is a 4 week long booster regimen for individuals who completed COVID-19 and PIVD vaccinations earlier this year. The booster vaccine bolsters antibody levels against omicron - or 10F, the virus strain responsible for CVID-19, as well as two other strains that have been identified since the pandemic started in April.\nClover has launched a vaccine for H1N1 that bolsters antibody levels against omicron -\nOmics Virus COVID-J19, a novel coronavirus (CoV) responsible for the devastating epidemic in Southeast Asia, has been reported to cause severe illness and high mortality rates in people. The current treatment options are limited.\n",
      "culture": "en",
      "augmenter": "CopyAI"
    }
  ]
}
```