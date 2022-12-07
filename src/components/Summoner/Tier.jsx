import React, { memo } from 'react';

const QueueType = {
  RANKED_SOLO_5x5: 'Solo Rank',
  RANKED_FLEX_SR: 'Flex Rank',
};

const Rank = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
};

const Tier = memo((props) => {
  const { queueType, tier, rank, leaguePoints, wins, losses } = props.data;
  const winRate = Math.floor(
    (Number(wins) / (Number(wins) + Number(losses))) * 100
  );

  return (
    <div className='flex flex-col px-16'>
      <p className='font-semibold text-myIndigo text-center opacity-70'>
        {QueueType[queueType]}
      </p>
      <div className='flex justify-center items-center my-3 gap-4'>
        <div className='w-16 h-16'>
          <img
            src={`${
              process.env.PUBLIC_URL
            }/images/ranked-emblems/${tier.toLowerCase()}.png`}
            alt='tier'
          />
        </div>
        <div>
          <p className='font-bold text-lg mb-1'>{`${tier} ${Rank[rank]}`}</p>
          <p className='font-semibold text-sm'>{`${leaguePoints} LP`}</p>
          <p className='font-semibold text-sm'>{`승률 ${winRate}% (${wins}승 ${losses}패)`}</p>
        </div>
      </div>
    </div>
  );
});

export default Tier;