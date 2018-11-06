/* eslint-disable */
export const fetchItineraries = jest.fn().mockImplementationOnce(() => [
  {
    PricingOptions: [
      {
        Agents: [4499211],
        DeeplinkUrl:
          'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fxpuk%2f2%2f11235.4698.2018-11-12%2c4698.11235.2018-11-13%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32356%7c236%7c11235%7c2018-11-12T14%3a40%7c16574%7c2018-11-12T16%3a00%7c80%7c-%7c-%7c-%2cflight%7c-32480%7c8714%7c13465%7c2018-11-13T20%3a55%7c11235%7c2018-11-13T22%3a15%7c80%7cOZ0YO%7cO%7c-%26carriers%3d-32356%2c-32480%26operators%3d-32356%2c-32528%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d127.27%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26quote_ids%3dxpuk.11235.4698.181112.181113.1..E%7cap-northeast-1.prod_75c2745eeb763abe8ef527f278cc4134%26deeplink_ids%3dap-northeast-1.prod_75c2745eeb763abe8ef527f278cc4134%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-11-06T05%3a42%3a00',
        Price: 127.27,
        QuoteAgeInMinutes: 4,
      },
    ],
    Agents: [
      [
        {
          Id: 4499211,
          ImageUrl: 'https://s1.apideeplink.com/images/websites/xpuk.png',
          Name: 'Expedia',
          OptimisedForMobile: true,
          Status: 'UpdatesComplete',
          Type: 'TravelAgent',
        },
      ],
    ],
    InboundLeg: {
      Arrival: '2018-11-13T22:15:00',
      CarrierName: [
        {
          Code: 'U2',
          DisplayCode: 'EZY',
          Id: 1050,
          ImageUrl: 'https://s1.apideeplink.com/images/airlines/EZ.png',
          Name: 'easyJet',
        },
      ],
      Carriers: [881],
      Departure: '2018-11-25T20:55:00',
      DestinationStation: [],
      Directionality: 'Inbound',
      Duration: 80,
      FlightNumbers: [
        {
          Code: 'U2',
          DisplayCode: 'EZY',
          Id: 1050,
          ImageUrl: 'https://s1.apideeplink.com/images/airlines/EZ.png',
          Name: 'easyJet',
        },
      ],
      Id: '13465-1811132055--32480-0-11235-1811132215',
      JourneyMode: 'Flight',
      OperatingCarriers: [938],
      OriginStation: [],
      SegmentIds: [1],
      Stops: [],
    },
    OutboundLeg: {
      Arrival: '2018-11-20T22:15:00',
      CarrierName: [
        {
          Code: 'U2',
          DisplayCode: 'EZY',
          Id: 1050,
          ImageUrl: 'https://s1.apideeplink.com/images/airlines/EZ.png',
          Name: 'easyJet',
        },
      ],
      Carriers: [881],
      Departure: '2018-11-13T20:55:00',
      DestinationStation: [],
      Directionality: 'Inbound',
      Duration: 80,
      FlightNumbers: [
        {
          Code: 'U2',
          DisplayCode: 'EZY',
          Id: 1050,
          ImageUrl: 'https://s1.apideeplink.com/images/airlines/EZ.png',
          Name: 'easyJet',
        },
      ],
      Id: '13465-1811132055--32480-0-11235-1811132215',
      JourneyMode: 'Flight',
      OperatingCarriers: [938],
      OriginStation: [],
      SegmentIds: [1],
      Stops: [],
    },
  },
]);
