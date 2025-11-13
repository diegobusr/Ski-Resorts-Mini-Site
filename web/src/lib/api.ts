import { Resort, Metrics } from '@/types/Resort';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function getResorts(): Promise<Resort[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/resorts`);
    if (!res.ok) throw new Error('Failed to fetch resorts');
    return res.json();
  } catch (error) {
    console.error('Error fetching resorts:', error);
    return [];
  }
}

export async function getAllResorts(): Promise<Resort[]> {
  const resorts = await getResorts();
  return resorts;
}

export async function getResort(slug: string): Promise<Resort | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/resorts/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch resorts');
    return res.json();
  } catch (error) {
    console.error('Error fetching resorts:', error);
    return null;
  }
}

export async function getResortData(slug: string): Promise<Resort | null> {
  const resort = await getResort(slug);
  return resort;
}

export async function getFeaturedResorts(): Promise<Resort[]> {
  const resorts = await getResorts();
  return resorts.slice(0, 5);
}

export async function getMetrics(): Promise<Metrics | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/metrics`);
    if (!res.ok) throw new Error('Failed to fetch metrics');
    return res.json();
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return null;
  }
}
