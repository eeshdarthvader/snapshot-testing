const mapApiData = ({
  Itineraries, Agents, Places, Legs, Carriers,
}) => {
  const ItinerariesObj = Itineraries.map((itinerary) => {
    // get outbound and inbound leg details
    const legOutBound = Legs.filter(l => l.Id === itinerary.OutboundLegId);
    const legInBound = Legs.filter(l => l.Id === itinerary.InboundLegId);

    const o = Object.create({});

    o.PricingOptions = itinerary.PricingOptions;

    /* Outbound details */
    const [OutboundLeg] = legOutBound;
    o.OutboundLeg = OutboundLeg;
    o.OutboundLeg.CarrierName = Carriers.filter(c => c.Id === o.OutboundLeg.Carriers[0]);
    o.OutboundLeg.DestinationStation = Places.filter(
      c => c.Id === o.OutboundLeg.DestinationStation,
    );
    o.OutboundLeg.OriginStation = Places.filter(c => c.Id === o.OutboundLeg.OriginStation);

    /* Inbound details */
    const [InboundLeg] = legInBound;
    o.InboundLeg = InboundLeg;
    o.InboundLeg.CarrierName = Carriers.filter(c => c.Id === o.InboundLeg.Carriers[0]);
    o.InboundLeg.OriginStation = Places.filter(c => c.Id === o.InboundLeg.OriginStation);
    o.InboundLeg.DestinationStation = Places.filter(c => c.Id === o.InboundLeg.DestinationStation);

    /* Agent details. For now we will show first agent itinerary */
    o.Agents = [];
    for (let i = 0; i < itinerary.PricingOptions.length; i += 1) {
      o.Agents.push(Agents.filter(a => a.Id === itinerary.PricingOptions[i].Agents[0]));
      o.Agents[i].Price = itinerary.PricingOptions[i].Price;
    }

    return o;
  });

  return ItinerariesObj;
};

module.exports = mapApiData;
