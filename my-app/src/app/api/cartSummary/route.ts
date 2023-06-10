import { db } from '../../../lib/DB/drizzle';
import { eq, sql } from 'drizzle-orm';
import { dine_market_cart } from '../../../lib/DB/schema';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST - cartSummary
 * Api route to get cart summary
 * search the cart for requested userId
 * get sum of products
 * get total price from db
 * returns response
 */
export async function GET(request: NextRequest) {
  const userId = request.headers.get('authorization');
  if (userId) {
    const user_id = userId;
    try {
      const result = await db
        .select({
          price: sql<number>`sum(dine_market_cart.product_quantity * dine_market_cart.product_price)`,
          quant: sql<number>`sum(dine_market_cart.product_quantity)`,
        })
        .from(dine_market_cart)
        .where(eq(dine_market_cart.user_id, user_id));
      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      return NextResponse.json([{ price: 0, quant: 0 }], { status: 500 });
    }
  } else {
    return NextResponse.json([{ price: 0, quant: 0 }], { status: 200 });
  }
}