const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.map = () => ({
  setView: jest.fn(),
});

leaflet.tileLayer = () => ({
  addTo: jest.fn(),
});

leaflet.marker = () => ({
  addTo: jest.fn(),
});

module.exports = leaflet;
