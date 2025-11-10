import { Metrics } from '@/types/Resort';

interface MetricsBarProps {
  metrics: Metrics | null;
}

const MetricsBar = ({ metrics }: MetricsBarProps) => {
  if (!metrics) return null;

  const averageMonthlySnowfall =
    metrics.averageMonthlySnowfall.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / metrics.averageMonthlySnowfall.length;

  return (
    <section className='py-8'>
      <div className='container mx-auto bg-gray-100 rounded-2xl py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
          <div>
            <h3 className='text-4xl font-bold text-blue-600'>
              {averageMonthlySnowfall} In.
            </h3>
            <p className='text-gray-600'>Avg. Snowfall</p>
          </div>
          <div>
            <h3 className='text-4xl font-bold text-blue-600'>
              {metrics.averageTicketPrice} USD
            </h3>
            <p className='text-gray-600'>Avg. Ticket Price</p>
          </div>
          <div>
            <h3 className='text-4xl font-bold text-blue-600'>
              {metrics.averageElevation} ft
            </h3>
            <p className='text-gray-600'>Avg. Elevation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;

