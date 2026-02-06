# Projects Page Pagination Implementation

## Overview
Implemented dynamic pagination for the Projects page with "Load More" functionality that fetches 12 items per batch.

## Features Implemented

### 1. Pagination State Management
- ✅ `displayedProjects` - Currently displayed projects
- ✅ `currentPage` - Current page number
- ✅ `isLoading` - Loading state indicator
- ✅ `hasMore` - Whether more items are available
- ✅ `ITEMS_PER_PAGE` - Constant set to 12

### 2. Load More Functionality
- ✅ Loads 12 items per click
- ✅ Appends new items to existing list
- ✅ Shows loading spinner during fetch
- ✅ Disables when no more items available
- ✅ Shows count badge (+12) on button
- ✅ Smooth animations and transitions

### 3. Smart Filtering & Search
- ✅ Resets to page 1 when filter changes
- ✅ Resets to page 1 when search term changes
- ✅ Maintains pagination state during load more
- ✅ Filters applied before pagination

### 4. UI States
- ✅ **Loading State** - Spinner with "Layihələr yüklənir..." message
- ✅ **No Results** - Empty state with search icon
- ✅ **End of Results** - "Bütün layihələr göstərildi" message
- ✅ **Load More Button** - Only shows when more items available

### 5. Mock Data
- ✅ 24 mock projects for testing
- ✅ Mixed categories (residential, commercial, industrial)
- ✅ Demonstrates pagination behavior

## How It Works

### Initial Load
1. Component mounts
2. `useEffect` triggers `loadProjects(1, true)`
3. First 12 items loaded and displayed
4. "Load More" button appears if more items exist

### Load More Click
1. User clicks "Daha Çox Yüklə"
2. `currentPage` increments
3. Next 12 items fetched
4. New items appended to existing list
5. Button hides if no more items

### Filter/Search Change
1. User changes filter or search term
2. `useEffect` triggers
3. Resets to page 1
4. Loads first 12 items of filtered results
5. Updates "Load More" button visibility

## Backend Integration

### Current Implementation (Mock)
```javascript
const loadProjects = async (page, reset = false) => {
  setIsLoading(true);
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
  
  const filtered = getFilteredProjects();
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const newProjects = filtered.slice(startIndex, endIndex);
  
  if (reset) {
    setDisplayedProjects(newProjects);
    setCurrentPage(1);
  } else {
    setDisplayedProjects(prev => [...prev, ...newProjects]);
  }
  
  setHasMore(endIndex < filtered.length);
  setIsLoading(false);
};
```

### Backend API Integration (Recommended)

#### API Endpoint Structure
```
GET /api/projects?page=1&limit=12&category=all&search=villa
```

#### Expected Response Format
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Lüks Villa Kompleksi",
      "category": "residential",
      "location": "Bakı, Yasamal",
      "year": "2024",
      "area": "450m²",
      "status": "Tamamlandı",
      "image": "https://api.example.com/images/project1.jpg",
      "description": "Modern dizayn..."
    }
    // ... 11 more items
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 60,
    "hasMore": true
  }
}
```

#### Implementation Code
```javascript
const loadProjects = async (page, reset = false) => {
  setIsLoading(true);
  
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: ITEMS_PER_PAGE.toString(),
      category: activeFilter,
      search: searchTerm
    });
    
    const response = await fetch(`/api/projects?${params}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    
    const data = await response.json();
    
    if (reset) {
      setDisplayedProjects(data.projects);
      setCurrentPage(1);
    } else {
      setDisplayedProjects(prev => [...prev, ...data.projects]);
    }
    
    setHasMore(data.pagination.hasMore);
    
  } catch (error) {
    console.error('Error loading projects:', error);
    // Optional: Add error state and show error message to user
  } finally {
    setIsLoading(false);
  }
};
```

### Alternative: Cursor-Based Pagination
For better performance with large datasets:

```javascript
const [cursor, setCursor] = useState(null);

const loadProjects = async (reset = false) => {
  setIsLoading(true);
  
  try {
    const params = new URLSearchParams({
      limit: ITEMS_PER_PAGE.toString(),
      category: activeFilter,
      search: searchTerm
    });
    
    if (!reset && cursor) {
      params.append('cursor', cursor);
    }
    
    const response = await fetch(`/api/projects?${params}`);
    const data = await response.json();
    
    if (reset) {
      setDisplayedProjects(data.projects);
    } else {
      setDisplayedProjects(prev => [...prev, ...data.projects]);
    }
    
    setCursor(data.nextCursor);
    setHasMore(!!data.nextCursor);
    
  } catch (error) {
    console.error('Error loading projects:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## Performance Optimizations

### 1. Debounced Search
```javascript
import { useCallback } from 'react';
import debounce from 'lodash/debounce';

const debouncedSearch = useCallback(
  debounce((term) => {
    setSearchTerm(term);
  }, 500),
  []
);
```

### 2. Image Lazy Loading
Already implemented with native `loading="lazy"` attribute support.

### 3. Virtual Scrolling (Optional)
For very large lists, consider using `react-window` or `react-virtualized`.

## Error Handling

### Add Error State
```javascript
const [error, setError] = useState(null);

// In loadProjects catch block:
catch (error) {
  console.error('Error loading projects:', error);
  setError('Layihələr yüklənərkən xəta baş verdi');
}

// In JSX:
{error && (
  <div className="text-center py-12">
    <p className="text-red-400">{error}</p>
    <button onClick={() => loadProjects(currentPage, true)}>
      Yenidən cəhd et
    </button>
  </div>
)}
```

## Testing Checklist
- [x] Initial load shows first 12 items
- [x] Load More button appears when more items exist
- [x] Load More loads next 12 items
- [x] Items append correctly (no duplicates)
- [x] Loading spinner shows during fetch
- [x] Button hides when no more items
- [x] Filter change resets pagination
- [x] Search change resets pagination
- [x] Empty state shows when no results
- [x] End message shows when all loaded
- [x] No console errors

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly

## Future Enhancements
- [ ] Infinite scroll option (auto-load on scroll)
- [ ] "Back to top" button
- [ ] Skeleton loading states
- [ ] Retry mechanism for failed requests
- [ ] Cache loaded pages
- [ ] Prefetch next page
- [ ] Analytics tracking (page views, load more clicks)

## Files Modified
1. `src/pages/ProjectsPage.jsx` (MODIFIED)
   - Added pagination state management
   - Implemented load more functionality
   - Added loading and empty states
   - Ready for backend integration
