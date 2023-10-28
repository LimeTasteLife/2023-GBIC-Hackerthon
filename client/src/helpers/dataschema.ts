


export const mintData = ({data}: any) => {

  // console.log('image array', data.imageSrc[1])

  return {
    seriesInfo: {
      series: data.series,
      title: data.title.toString(),
      benefit: data.benefit.toString(),
      owner: data.owner.toString(),
      useWhere: data.useWhere.toString(),
      useWhenFrom: data.useWhenFrom.toString(),
      useWhenTo: data.useWhenTo.toString(),
      description: data.description.toString(),
      quantity: data.quantity
    },
    0: {
      name: `Series ${data.series} Stamp Board`,
      image: data.imageSrc[0],
      description: data.stampBoardDesc.toString(),
      series: data.series
    },
    1: {
      name: `Series ${data.series} Stamp 1`,
      image: data.imageSrc[1],
      description: data.firstStampDesc.toString(),
      lat: data.firstStampLat,
      lng: data.firstStampLot,
      place: data.firstStampAddress,
      series: data.series
    },
    2: {
      name: `Series ${data.series} Stamp 2`,
      image: data.imageSrc[2],
      description: data.secondStampDesc.toString(),
      lat: data.secondStampLat,
      lng: data.secondStampLot,
      place: data.secondStampAddress,
      series: data.series
    },
    3: {
      name: `Series ${data.series} Stamp 1`,
      image: data.imageSrc[3],
      description: data.thirdStampDesc.toString(),
      lat: data.thirdStampLat,
      lng: data.thirdStampLot,
      place: data.thirdStampAddress,
      series: data.series
    },
    4: {
      name: `Series ${data.series} Stamp 1`,
      image: data.imageSrc[4],
      description: data.fourthStampDesc.toString(),
      lat: data.fourthStampLat,
      lng: data.fourthStampLot,
      place: data.fourthStampAddress,
      series: data.series
    },
  };
};
