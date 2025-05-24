import { NextResponse } from 'next/server'
import { Category, CategoryResponse } from '@/types/category'

// Mock data cho categories
const categories: Category[] = [
  {
    id: 1,
    name: 'Bộ lọc dầu',
    slug: 'bo-loc-dau',
    description: 'Các loại bộ lọc dầu cho xe',
    image: '/images/category-1.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Bộ lọc không khí',
    slug: 'bo-loc-khong-khi',
    description: 'Các loại bộ lọc không khí cho xe',
    image: '/images/category-2.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Bộ lọc nhiên liệu',
    slug: 'bo-loc-nhien-lieu',
    description: 'Các loại bộ lọc nhiên liệu cho xe',
    image: '/images/category-3.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'Bộ lọc trong cabin',
    slug: 'bo-loc-trong-cabin',
    description: 'Các loại bộ lọc trong cabin cho xe',
    image: '/images/category-4.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: 'Bộ lọc không khí',
    slug: 'bo-loc-khong-khi',
    description: 'Các loại bộ lọc không khí cho xe',
    image: '/images/category-5.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: 'Bộ lọc trong cabin',
    slug: 'bo-loc-trong-cabin',
    description: 'Các loại bộ lọc trong cabin cho xe',
    image: '/images/category-6.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: 'Bộ lọc nhiên liệu',
    slug: 'bo-loc-nhien-lieu',
    description: 'Các loại bộ lọc nhiên liệu cho xe',
    image: '/images/category-7.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    name: 'Bộ lọc không khí',
    slug: 'bo-loc-khong-khi',
    description: 'Các loại bộ lọc không khí cho xe',
    image: '/images/category-8.png',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const paginatedCategories = categories.slice(startIndex, endIndex)

    const response: CategoryResponse = {
      data: paginatedCategories,
      total: categories.length,
      page,
      limit
    }

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' + error },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const newCategory: Category = {
      id: categories.length + 1,
      name: body.name,
      slug: body.slug,
      description: body.description,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    categories.push(newCategory)

    return NextResponse.json(newCategory, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' + error },
      { status: 500 }
    )
  }
}
