const questionDatabase = [
        {
            id: 1,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Jakie jest rozwiązanie równania $T(n) = 2T(n/2) + n$ według twierdzenia o rekurencji uniwersalnej (master theorem)?",
            options: [
                { text: "$\\Theta(n \\log n)$", isCorrect: true },
                { text: "$\\Theta(n^2)$", isCorrect: false },
                { text: "$\\Theta(n)$", isCorrect: false },
                { text: "$\\Theta(\\log n)$", isCorrect: false }
            ]
        },
        {
            id: 2,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Co dokładnie bada analiza zamortyzowana?",
            options: [
                { text: "Średni czas wykonania operacji w najgorszym (pesymistycznym) ciągu operacji.", isCorrect: true },
                { text: "Oczekiwany czas wykonania dla losowych danych wejściowych.", isCorrect: false },
                { text: "Średni czas wykonania jednej operacji przy założeniu równomiernego rozkładu danych.", isCorrect: false },
                { text: "Całkowity czas wykonania pojedynczej, najdroższej operacji w programie.", isCorrect: false }
            ]
        },
        {
            id: 3,
            category: "1. Złożoność obliczeniowa i analiza algorytmów",
            text: "Jak poprawnie uporządkować rosnąco złożoności czasowe: $n \\log n, n^2, n^3, 2^n$?",
            options: [
                { text: "$n \\log n \\le n^2 \\le n^3 \\le 2^n$", isCorrect: true },
                { text: "$n \\log n \\le n^3 \\le n^2 \\le 2^n$", isCorrect: false },
                { text: "$2^n \\le n^3 \\le n^2 \\le n \\log n$", isCorrect: false },
                { text: "$n^2 \\le n \\log n \\le n^3 \\le 2^n$", isCorrect: false }
            ]
        },

        {
            id: 4,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Jaka jest złożoność sortowania przez wstawianie (insertion sort) w najgorszym przypadku?",
            options: [
                { text: "$O(n^2)$", isCorrect: true },
                { text: "$O(n \\log n)$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false }
            ]
        },
        {
            id: 5,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czego używa zrandomizowany quicksort do wyboru elementu osiowego (pivot)?",
            options: [
                { text: "Generatora liczb pseudolosowych do wylosowania indeksu pivota.", isCorrect: true },
                { text: "Zawsze pierwszego elementu tablicy.", isCorrect: false },
                { text: "Algorytmu 'Magicznych Piątek' do znalezienia mediany.", isCorrect: false },
                { text: "Zawsze środkowego elementu tablicy.", isCorrect: false }
            ]
        },
        {
            id: 6,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czy sortowanie przez scalanie (merge sort) jest algorytmem deterministycznym?",
            options: [
                { text: "Tak, zawsze wykonuje te same kroki dla tych samych danych.", isCorrect: true },
                { text: "Nie, zależy od losowego wyboru pivota.", isCorrect: false }
            ]
        },
        {
            id: 7,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Jaka jest złożoność wyszukiwania binarnego?",
            options: [
                { text: "$O(\\log n)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 8,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Który algorytm sortowania jest przykładem metody \"dziel i zwyciężaj\"?",
            options: [
                { text: "Merge sort (Sortowanie przez scalanie)", isCorrect: true },
                { text: "Quicksort (Sortowanie szybkie)", isCorrect: true },
                { text: "Insertion sort (Sortowanie przez wstawianie)", isCorrect: false },
                { text: "Selection sort (Sortowanie przez wybór)", isCorrect: false }
            ]
        },
        {
            id: 9,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Za pomocą jakiej struktury/algorytmu można znaleźć k-ty najmniejszy element w oczekiwanym czasie liniowym?",
            options: [
                { text: "Randomized Select (Quickselect)", isCorrect: true },
                { text: "Algorytmu Prima", isCorrect: false },
                { text: "Kopca binarnego poprzez k-krotne wywołanie Extract-Min", isCorrect: false },
                { text: "Standardowego Merge Sorta", isCorrect: false }
            ]
        },
        {
            id: 10,
            category: "2. Algorytmy sortowania i wyszukiwania elementu",
            text: "Czy sortowanie przez wstawianie (insertion sort) jest algorytmem stabilnym?",
            options: [
                { text: "Tak", isCorrect: true },
                { text: "Nie", isCorrect: false }
            ]
        },

        {
            id: 11,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "W jakiej kolejności przegląd inorder w drzewie BST odwiedza węzły?",
            options: [
                { text: "W kolejności rosnącej wartości kluczy.", isCorrect: true },
                { text: "Lewe poddrzewo -> Korzeń -> Prawe poddrzewo.", isCorrect: true },
                { text: "Korzeń -> Lewe poddrzewo -> Prawe poddrzewo.", isCorrect: false },
                { text: "Od liści w kierunku korzenia.", isCorrect: false }
            ]
        },
        {
            id: 12,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaka jest w najgorszym przypadku wysokość drzewa BST złożonego z n węzłów?",
            options: [
                { text: "$O(n)$ (lub dokładnie $n-1$)", isCorrect: true },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 13,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaki jest koszt wyszukiwania w zrównoważonym drzewie BST (np. AVL)?",
            options: [
                { text: "$O(\\log n)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 14,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jaka jest maksymalna wysokość drzewa AVL składającego się z $n$ węzłów?",
            options: [
                { text: "$\\approx 1.44 \\log_2 n$", isCorrect: true },
                { text: "Dokładnie $\\log_2 n$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "$\\approx 2 \\log_2 n$", isCorrect: false }
            ]
        },
        {
            id: 15,
            category: "3. Struktury danych: Drzewa (BST, AVL, Czerwono-Czarne)",
            text: "Jakiego koloru zawsze musi być korzeń i liście (węzły NIL) w drzewie czerwono-czarnym?",
            options: [
                { text: "Czarny", isCorrect: true },
                { text: "Czerwony", isCorrect: false },
                { text: "Korzeń czerwony, liście czarne", isCorrect: false },
                { text: "Zależy od współczynnika wyważenia", isCorrect: false }
            ]
        },

        {
            id: 16,
            category: "4. Struktury danych: Kopce",
            text: "Jaki jest koszt operacji decrease-key w kopcu Fibonacciego?",
            options: [
                { text: "Zamortyzowane $O(1)$", isCorrect: true },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n)$", isCorrect: false },
                { text: "Zamortyzowane $O(\\log n)$", isCorrect: false }
            ]
        },
        {
            id: 17,
            category: "4. Struktury danych: Kopce",
            text: "Z jaką złożonością buduje się kopiec (Build-Max-Heap) z $n$ elementów z wykorzystaniem metody bottom-up?",
            options: [
                { text: "$O(n)$", isCorrect: true },
                { text: "$O(n \\log n)$", isCorrect: false },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n^2)$", isCorrect: false }
            ]
        },

        {
            id: 18,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Czym jest kolizja w tablicy mieszającej?",
            options: [
                { text: "Sytuacją, w której dwa różne klucze hashują do tego samego indeksu (wartości funkcji mieszającej).", isCorrect: true },
                { text: "Próbą usunięcia elementu, którego nie ma w tablicy.", isCorrect: false },
                { text: "Przekroczeniem maksymalnego rozmiaru tablicy.", isCorrect: false },
                { text: "Zapętleniem się funkcji haszującej.", isCorrect: false }
            ]
        },
        {
            id: 19,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Czego przykładem jest próbkowanie kwadratowe (quadratic probing) w tablicach mieszających?",
            options: [
                { text: "Techniki rozwiązywania kolizji poprzez adresowanie otwarte.", isCorrect: true },
                { text: "Doskonałej funkcji haszującej.", isCorrect: false },
                { text: "Metody łańcuchowej (chaining).", isCorrect: false },
                { text: "Metody zmniejszania kosztu zamortyzowanego.", isCorrect: false }
            ]
        },
        {
            id: 20,
            category: "5. Struktury danych: Tablice mieszające (Hashing)",
            text: "Jaki jest koszt wyszukiwania przy użyciu doskonałej funkcji mieszającej (perfect hash function)?",
            options: [
                { text: "$O(1)$ nawet w najgorszym przypadku.", isCorrect: true },
                { text: "$O(\\log n)$ w najgorszym przypadku.", isCorrect: false },
                { text: "Średnio $O(1)$, pesymistycznie $O(n)$.", isCorrect: false },
                { text: "Zależy od wybranej metody rozwiązywania kolizji.", isCorrect: false }
            ]
        },

        {
            id: 21,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Ile wynosi w najgorszym przypadku wysokość nowego węzła w liście z przeskokami (skip list)?",
            options: [
                { text: "Zależy od narzuconego limitu (MaxLevel), często ograniczona do $O(\\log n)$.", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(1)$", isCorrect: false },
                { text: "Dokładnie tyle, ile wynosi liczba rzutów monetą.", isCorrect: false }
            ]
        },
        {
            id: 22,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Jaka jest złożoność wyszukiwania w strukturze skip list?",
            options: [
                { text: "Oczekiwana: $O(\\log n)$", isCorrect: true },
                { text: "Pesymistyczna: $O(n)$", isCorrect: true },
                { text: "Gwarantowana (pesymistyczna): $O(\\log n)$", isCorrect: false },
                { text: "Oczekiwana: $O(1)$", isCorrect: false }
            ]
        },
        {
            id: 23,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Jaki jest zamortyzowany czas wstawiania na koniec dla tablicy dynamicznej podwajającej swój rozmiar?",
            options: [
                { text: "$O(1)$", isCorrect: true },
                { text: "$O(n)$", isCorrect: false },
                { text: "$O(\\log n)$", isCorrect: false },
                { text: "$O(n \\log n)$", isCorrect: false }
            ]
        },
        {
            id: 24,
            category: "6. Struktury danych: Listy z przeskokami i tablice dynamiczne",
            text: "Czym różnią się wskaźniki w liście z przeskokami od wskaźników w standardowej liście jednokierunkowej?",
            options: [
                { text: "Węzły w skip liście mogą posiadać wiele wskaźników 'w przód' (forward pointers) przeskakujących inne węzły.", isCorrect: true },
                { text: "Wskaźniki w skip liście prowadzą wyłącznie w tył.", isCorrect: false },
                { text: "Skip lista zawsze posiada wskaźniki do rodzica i dzieci.", isCorrect: false },
                { text: "Nie ma żadnej różnicy, to inna nazwa na listę cykliczną.", isCorrect: false }
            ]
        },

        {
            id: 25,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry ze znalezieniem wierzchołka poprzez liniowe przeszukiwanie tablicy (bez kolejki priorytetowej)?",
            options: [
                { text: "$O(|V|^2)$", isCorrect: true },
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: false },
                { text: "$O(|V| \\cdot |E|)$", isCorrect: false },
                { text: "$O(|E| \\log |V|)$", isCorrect: false }
            ]
        },
        {
            id: 26,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaki problem rozwiązuje algorytm Floyda-Warshalla?",
            options: [
                { text: "Problem najkrótszych ścieżek między wszystkimi parami wierzchołków.", isCorrect: true },
                { text: "Problem znalezienia minimalnego drzewa rozpinającego.", isCorrect: false },
                { text: "Problem znalezienia maksymalnego przepływu.", isCorrect: false },
                { text: "Sortowanie topologiczne grafu.", isCorrect: false }
            ]
        },
        {
            id: 27,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "W jakim grafie algorytm BFS znajduje najkrótsze ścieżki od źródła?",
            options: [
                { text: "W grafie nieważonym (lub o identycznych wagach dla wszystkich krawędzi).", isCorrect: true },
                { text: "W każdym grafie skierowanym, niezależnie od wag.", isCorrect: false },
                { text: "Tylko w drzewach.", isCorrect: false },
                { text: "W grafach z ujemnymi wagami krawędzi.", isCorrect: false }
            ]
        },
        {
            id: 28,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jakich wag krawędzi wymaga algorytm Dijkstry do poprawnego działania?",
            options: [
                { text: "Tylko wag nieujemnych ($\\ge 0$).", isCorrect: true },
                { text: "Dowolnych wag, z wyjątkiem ujemnych cykli.", isCorrect: false },
                { text: "Tylko całkowitych wag.", isCorrect: false },
                { text: "Dowolnych wag.", isCorrect: false }
            ]
        },
        {
            id: 29,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry przy użyciu kopca Fibonacciego?",
            options: [
                { text: "$O(|E| + |V| \\log |V|)$", isCorrect: true },
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: false },
                { text: "$O(|V|^2)$", isCorrect: false },
                { text: "$O(|E| \\log |V|)$", isCorrect: false }
            ]
        },
        {
            id: 30,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Do jakiego algorytmu (szukającego minimalnego drzewa rozpinającego) algorytm Dijkstry jest strukturalnie podobny?",
            options: [
                { text: "Do algorytmu Prima.", isCorrect: true },
                { text: "Do algorytmu Kruskala.", isCorrect: false },
                { text: "Do algorytmu Bellmana-Forda.", isCorrect: false },
                { text: "Do algorytmu Floyda-Warshalla.", isCorrect: false }
            ]
        },
        {
            id: 31,
            category: "7. Algorytmy grafowe: Najkrótsze ścieżki",
            text: "Jaka jest złożoność algorytmu Dijkstry z użyciem standardowego kopca binarnego?",
            options: [
                { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: true },
                { text: "$O(|E| + |V| \\log |V|)$", isCorrect: false },
                { text: "$O(|V|^2)$", isCorrect: false },
                { text: "$O(|V| \\cdot |E|)$", isCorrect: false }
            ]
        },

        {
            id: 32,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Do czego wykorzystuje się algorytm DFS (Przeszukiwanie w głąb)?",
            options: [
                { text: "Do sortowania topologicznego w grafach DAG.", isCorrect: true },
                { text: "Do wykrywania cykli w grafie.", isCorrect: true },
                { text: "Do znajdowania silnie spójnych składowych.", isCorrect: true },
                { text: "Do znajdowania najkrótszej ścieżki w grafach ważonych.", isCorrect: false }
            ]
        },
        {
            id: 33,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Za pomocą jakich algorytmów można znaleźć minimalne drzewo rozpinające (MST)?",
            options: [
                { text: "Algorytmu Kruskala.", isCorrect: true },
                { text: "Algorytmu Prima.", isCorrect: true },
                { text: "Algorytmu Dijkstry.", isCorrect: false },
                { text: "Algorytmu Bellmana-Forda.", isCorrect: false }
            ]
        },
        {
            id: 34,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Jakich podstawowych operacji na strukturze zbiorów rozłącznych używa algorytm Kruskala?",
            options: [
                { text: "Make-Set, Find-Set, Union.", isCorrect: true },
                { text: "Push, Pop, Peek.", isCorrect: false },
                { text: "Insert, Extract-Min, Decrease-Key.", isCorrect: false },
                { text: "Enqueue, Dequeue.", isCorrect: false }
            ]
        },
        {
            id: 35,
            category: "8. Algorytmy grafowe: Przeszukiwanie i MST",
            text: "Jaka zależność matematyczna między liczbą krawędzi ($|E|$) a liczbą wierzchołków ($|V|$) zachodzi w drzewie?",
            options: [
                { text: "$|E| = |V| - 1$", isCorrect: true },
                { text: "$|E| = |V|$", isCorrect: false },
                { text: "$|E| = \\frac{|V|(|V|-1)}{2}$", isCorrect: false },
                { text: "$|E| = |V| + 1$", isCorrect: false }
            ]
        },

        {
            id: 36,
            category: "9. Algorytmy grafowe: Sieci przepływowe",
            text: "Co dzieje się z przepustowością krawędzi w sieci przepływowej po znalezieniu ścieżki powiększającej?",
            options: [
                { text: "Zwiększany jest faktyczny przepływ, a w sieci residualnej modyfikowane są przepustowości w przód i w tył.", isCorrect: true },
                { text: "Przepustowość krawędzi zostaje trwale wyzerowana.", isCorrect: false },
                { text: "Graf ulega zniszczeniu, a proces startuje od nowa.", isCorrect: false },
                { text: "Wszystkie wagi w grafie stają się ujemne.", isCorrect: false }
            ]
        },
        {
            id: 37,
            category: "9. Algorytmy grafowe: Sieci przepływowe",
            text: "Do czego służy algorytm Forda-Fulkersona?",
            options: [
                { text: "Do znajdowania maksymalnego przepływu w sieci przepływowej.", isCorrect: true },
                { text: "Do znajdowania najkrótszej ścieżki w sieci o ujemnych wagach.", isCorrect: false },
                { text: "Do budowy minimalnego drzewa rozpinającego.", isCorrect: false },
                { text: "Do sprawdzania czy graf jest dwudzielny.", isCorrect: false }
            ]
        },

        {
            id: 38,
            category: "10. Algorytmy tekstowe (dopasowywanie wzorców)",
            text: "Który algorytm dopasowywania wzorców opiera się na schemacie Hornera (rolling hash)?",
            options: [
                { text: "Algorytm Rabina-Karpa.", isCorrect: true },
                { text: "Algorytm Knutha-Morrisa-Pratta (KMP).", isCorrect: false },
                { text: "Algorytm Boyera-Moore'a.", isCorrect: false },
                { text: "Naiwny algorytm wyszukiwania.", isCorrect: false }
            ]
        },
        {
            id: 39,
            category: "10. Algorytmy tekstowe (dopasowywanie wzorców)",
            text: "W jakim algorytmie może wystąpić \"fałszywe trafienie\" (spurious hit)?",
            options: [
                { text: "W algorytmie Rabina-Karpa (gdy dwa różne ciągi mają ten sam hash).", isCorrect: true },
                { text: "W algorytmie Knutha-Morrisa-Pratta (KMP).", isCorrect: false },
                { text: "W algorytmie Boyera-Moore'a.", isCorrect: false },
                { text: "W budowie drzewa Huffmana.", isCorrect: false }
            ]
        },

        {
            id: 40,
            category: "11. Algorytmy zrandomizowane (teoria)",
            text: "Jaki rodzaj czasu działania najczęściej bada się w przypadku algorytmów zrandomizowanych?",
            options: [
                { text: "Oczekiwany (expected) czas działania.", isCorrect: true },
                { text: "Czas amortyzowany.", isCorrect: false },
                { text: "Dokładny pesymistyczny czas działania.", isCorrect: false },
                { text: "Czas optymistyczny.", isCorrect: false }
            ]
        },
        {
            id: 41,
            category: "11. Algorytmy zrandomizowane (teoria)",
            text: "W jakim celu najczęściej stosuje się randomizację w algorytmach (np. w Randomized Quicksort)?",
            options: [
                { text: "Aby uniezależnić zachowanie algorytmu od konkretnego (np. pesymistycznego) ułożenia danych wejściowych.", isCorrect: true },
                { text: "Aby zagwarantować zawsze idealny, optymistyczny czas wykonania.", isCorrect: false },
                { text: "Aby zmniejszyć wymaganą złożoność pamięciową do zera.", isCorrect: false },
                { text: "Aby pominąć etap partycjonowania tablicy.", isCorrect: false }
            ]
        },

        {
        id: 42,
        category: "Sortowanie: Merge Sort",
        text: "Jakie jest kryterium zakończenia rekurencji w procedurze MergeSort(A, left, right) zgodnie z podanym pseudokodem?",
        options: [
            { text: "Wykonuje się dopóki $left < right$", isCorrect: true },
            { text: "Wykonuje się dopóki $left \\le right$", isCorrect: false },
            { text: "Wykonuje się dopóki $left == right$", isCorrect: false },
            { text: "Wykonuje się dopóki $right == 0$", isCorrect: false }
        ]
    },
    {
        id: 43,
        category: "Sortowanie: Heap Sort",
        text: "W algorytmie Heapsort, jaki jest zakres pętli iterującej przy budowaniu początkowego kopca (procedura BuildHeap)?",
        options: [
            { text: "Od $\\lfloor length[A]/2 \\rfloor$ w dół do 1", isCorrect: true },
            { text: "Od $length[A]$ w dół do 2", isCorrect: false },
            { text: "Od 1 do $\\lfloor length[A]/2 \\rfloor$", isCorrect: false },
            { text: "Od 1 do $length[A]$", isCorrect: false }
        ]
    },
    {
        id: 44,
        category: "Sortowanie: Quick Sort",
        text: "Co zwraca wywołanie operacji Partition w algorytmie Quicksort?",
        options: [
            { text: "Indeks, względem którego tablica została podzielona.", isCorrect: true },
            { text: "Wartość elementu osiowego (pivot).", isCorrect: false },
            { text: "Rozmiar lewej podtablicy.", isCorrect: false },
            { text: "Wskaźnik na nową, pomocniczą podtablicę.", isCorrect: false }
        ]
    },
    {
        id: 45,
        category: "Sortowanie: Bucket Sort",
        text: "W sortowaniu kubełkowym (Bucket Sort), jakim algorytmem sortowana jest domyślnie zawartość pojedynczego kubełka (listy `B[i]`)?",
        options: [
            { text: "Sortowaniem przez wstawianie (Insertion Sort).", isCorrect: true },
            { text: "Szybkim sortowaniem (Quicksort).", isCorrect: false },
            { text: "Sortowaniem przez kopcowanie (Heapsort).", isCorrect: false },
            { text: "Sortowaniem bąbelkowym (Bubble Sort).", isCorrect: false }
        ]
    },
    {
        id: 46,
        category: "Sortowanie: Counting Sort",
        text: "Jaką operację wykonuje pętla `C[i] = C[i] + C[i-1]` w algorytmie sortowania przez zliczanie (Counting Sort)?",
        options: [
            { text: "Oblicza sumy prefiksowe, wyznaczając liczbę elementów mniejszych lub równych $i$.", isCorrect: true },
            { text: "Zeruje zawartość tablicy zliczeń w czasie liniowym.", isCorrect: false },
            { text: "Zlicza bezpośrednio wystąpienia danego klucza w tablicy wejściowej.", isCorrect: false },
            { text: "Odwraca kolejność elementów, aby zagwarantować stabilność sortowania.", isCorrect: false }
        ]
    },
    {
        id: 47,
        category: "Sortowanie: Radix Sort",
        text: "Jakiego wymagania względem procedury pomocniczej `StableSort` przestrzega algorytm Radix Sort?",
        options: [
            { text: "Procedura musi stabilnie sortować tablicę względem pojedynczej pozycj/cyfry $i$.", isCorrect: true },
            { text: "Procedura musi działać w czasie stałym $O(1)$ i sortować w miejscu.", isCorrect: false },
            { text: "Procedura nie może alokować dodatkowej pamięci.", isCorrect: false },
            { text: "Procedura musi opierać się wyłącznie na metodzie \"dziel i zwyciężaj\".", isCorrect: false }
        ]
    },
    {
        id: 48,
        category: "Struktury Danych: Listy",
        text: "Co następuje w pierwszym kroku podczas wstawiania elementu `x` na początek listy jednokierunkowej w funkcji `ListInsert(L, x)`?",
        options: [
            { text: "Zostaje zaktualizowany wskaźnik `next[x] = head[L]`.", isCorrect: true },
            { text: "Wskaźnik `prev[x]` otrzymuje wartość `NIL`.", isCorrect: false },
            { text: "Zostaje usunięty dotychczasowy pierwszy węzeł.", isCorrect: false },
            { text: "Wskaźnik `head[L]` staje się równy `NIL`.", isCorrect: false }
        ]
    },
    {
        id: 49,
        category: "Struktury Danych: Kolejki",
        text: "W jaki sposób rozwiązany jest problem dotarcia wskaźnika dopisywania do końca tablicy podczas wywoływania operacji `Enqueue(Q, x)` (tablica cykliczna)?",
        options: [
            { text: "Jeśli `tail[Q] == length[Q]`, to `tail[Q]` zostaje ustawiony na 1.", isCorrect: true },
            { text: "Zgłaszany jest błąd przepełnienia (overflow).", isCorrect: false },
            { text: "Rozmiar tablicy dynamicznej powiększa się dwukrotnie.", isCorrect: false },
            { text: "Wskaźnik `head[Q]` jest przesuwany do przodu by zwolnić miejsce.", isCorrect: false }
        ]
    },
    {
        id: 50,
        category: "Struktury Danych: Kopce",
        text: "Jaki warunek sprawdza pętla `while` podczas operacji `HeapInsert(A, key)`, aby nowy klucz wędrował w górę kopca?",
        options: [
            { text: "`i > 1` oraz `A[Parent(i)] < key`", isCorrect: true },
            { text: "`i < heap_size` oraz `A[Left(i)] > key`", isCorrect: false },
            { text: "`i > 0` oraz `A[Parent(i)] > key`", isCorrect: false },
            { text: "`A[Left(i)] < key` oraz `A[Right(i)] < key`", isCorrect: false }
        ]
    },
    {
        id: 51,
        category: "Struktury Danych: Kopce",
        text: "Jakie jest pierwsze przesunięcie węzłów wykonywane na początku procedury `HeapExtractMax(A)` tuż po zapamiętaniu zwracanego maksimum?",
        options: [
            { text: "Ostatni węzeł w strukturze `A[heap_size[A]]` trafia do korzenia `A[1]`.", isCorrect: true },
            { text: "Prawe dziecko korzenia zajmuje jego miejsce.", isCorrect: false },
            { text: "Wszystkie elementy przesuwają się o jeden indeks w lewo.", isCorrect: false },
            { text: "Wykonywane jest pełne `BuildHeap` na pozostałej tablicy.", isCorrect: false }
        ]
    },
    {
        id: 52,
        category: "Struktury Danych: Drzewa BST",
        text: "W jakim przypadku procedura wstawiania elementu do drzewa poszukiwań binarnych `TreeInsert(x, k)` przekaże element rekurencyjnie do lewego poddrzewa?",
        options: [
            { text: "Gdy `k < key[x]`.", isCorrect: true },
            { text: "Gdy `k > key[x]`.", isCorrect: false },
            { text: "Gdy lewe dziecko ma pusty wskaźnik `NULL`.", isCorrect: false },
            { text: "Decyduje o tym losowy wskaźnik w celu balansowania wysokości.", isCorrect: false }
        ]
    },
    {
        id: 53,
        category: "Struktury Danych: Drzewa BST",
        text: "Jaką operację zakłada algorytm usuwania węzła z drzewa binarnego (zarys algorytmu), jeśli węzeł posiada dwoje dzieci?",
        options: [
            { text: "Zamienić go z bezpośrednim następnikiem (lub poprzednikiem) i usunąć go z nowej lokacji.", isCorrect: true },
            { text: "Zastąpić lewym dzieckiem, a prawe podpiąć na prawo od największego węzła poddrzewa.", isCorrect: false },
            { text: "Zgłosić błąd i uniemożliwić usunięcie takiego węzła.", isCorrect: false },
            { text: "Wykonać rotację w lewo lub w prawo aż węzeł stanie się liściem.", isCorrect: false }
        ]
    },
    {
        id: 54,
        category: "Struktury Danych: Drzewa AVL",
        text: "W jaki sposób procedura `balanceFactor(Node x)` oblicza współczynnik wyważenia w zbalansowanym drzewie AVL?",
        options: [
            { text: "Zwraca różnicę: `height(x.left) - height(x.right)`.", isCorrect: true },
            { text: "Zwraca sumę: `height(x.left) + height(x.right)`.", isCorrect: false },
            { text: "Sprawdza relację: `max(height(x.left), height(x.right))`.", isCorrect: false },
            { text: "Mierzy różnicę wag kluczy lewego i prawego syna.", isCorrect: false }
        ]
    },
    {
        id: 55,
        category: "Struktury Danych: Drzewa AVL",
        text: "Gdzie podpina się dotychczasowe lewe poddrzewo prawego dziecka (`y.left`) podczas pojedynczej rotacji w lewo (`rotateLeft(x)`)?",
        options: [
            { text: "Staje się prawym poddrzewem obracanego węzła (`x.right = y.left`).", isCorrect: true },
            { text: "Staje się nowym korzeniem (`root = y.left`).", isCorrect: false },
            { text: "Zostaje usunięte z drzewa.", isCorrect: false },
            { text: "Trafia do węzła z najmniejszą wartością klucza.", isCorrect: false }
        ]
    },
    {
        id: 56,
        category: "Struktury Danych: Drzewa Czerwono-Czarne",
        text: "Jaki kolor otrzymuje każdy nowy węzeł wstawiany do drzewa czerwono-czarnego na samym początku metody `rbInsert(x)`?",
        options: [
            { text: "Czerwony (`x->color = RED`).", isCorrect: true },
            { text: "Czarny (`x->color = BLACK`).", isCorrect: false },
            { text: "Szary (`x->color = GRAY`).", isCorrect: false },
            { text: "Naprzemienny z kolorem jego ojca.", isCorrect: false }
        ]
    },
    {
        id: 57,
        category: "Struktury Danych: Skip Lists",
        text: "Podczas przeszukiwania list z przeskokami (Search w Skip Lists), w jaki sposób iterujemy po kolejnych poziomach w głównej pętli algorytmu?",
        options: [
            { text: "Schodzimy poziomami w dół: `for i = list.level downto 1 do`.", isCorrect: true },
            { text: "Wspinamy się po poziomach: `for i = 1 to list.level do`.", isCorrect: false },
            { text: "Losowo wybieramy poziom początkowy: `i = randomLevel()`.", isCorrect: false },
            { text: "Analizujemy wyłącznie najwyższy poziom, po czym operujemy wskaźnikiem na węzeł bazowy.", isCorrect: false }
        ]
    },
    {
        id: 58,
        category: "Struktury Danych: Skip Lists",
        text: "Skąd pobierana jest wysokość dodawanego węzła (ilość nadanych wskaźników) podczas wstawiania w algorytmie Skip Lists?",
        options: [
            { text: "Z metody pseudolosowej `lvl = randomLevel()`.", isCorrect: true },
            { text: "Jest stała i wynosi zawsze maksymalny dozwolony `MaxLevel`.", isCorrect: false },
            { text: "Zależy ściśle od wagi wstawianego klucza.", isCorrect: false },
            { text: "Jest pobierana od wartości poziomu poprzedniego wierzchołka.", isCorrect: false }
        ]
    },
    {
        id: 59,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Co wymusza wyjście z pętli sprawdzania konfliktów w metodzie `HASH-INSERT` w adresowaniu otwartym, jeżeli nie odnajdziemy wolnego miejsca?",
        options: [
            { text: "Brak zalezienia miejsca po sprawdzeniu wszystkich pozycji: `i == m`.", isCorrect: true },
            { text: "Przekroczenie ujemnego limitu indeksowania.", isCorrect: false },
            { text: "Naruszenie reguły haszowania modularnego.", isCorrect: false },
            { text: "Napotkanie wskaźnika `NIL` (co natychmiast wywołuje powrót).", isCorrect: false }
        ]
    },
    {
        id: 60,
        category: "Statystyki Pozycyjne",
        text: "W jaki sposób drzewa ze statystykami pozycyjnymi wyznaczają relatywną rangę `r` bieżącego węzła podczas wywołania `OS-Select(x, i)`?",
        options: [
            { text: "Jako wielkość poddrzewa lewego powiększona o jeden: `r = x->left->size + 1`.", isCorrect: true },
            { text: "Jako głębokość węzła na najdłuższej gałęzi od korzenia.", isCorrect: false },
            { text: "Sumując wielkości wszystkich przodków.", isCorrect: false },
            { text: "Tylko jako wartość `x->size`.", isCorrect: false }
        ]
    },
    {
        id: 61,
        category: "Wyszukiwanie Elementów",
        text: "Z jaką złożonością czasową operacja iteracyjnego szukania minimum (`MINIMUM(A)`) znajduje optymalny wierzchołek?",
        options: [
            { text: "W złożoności $O(n-1)$, przeglądając zbiór jednoelementowymi porównaniami od indeksu 2.", isCorrect: true },
            { text: "W złożoności $O(1)$, pod warunkiem że użyto kopca Fibonacciego.", isCorrect: false },
            { text: "W złożoności $O(\\log n)$ za pomocą funkcji `Partition`.", isCorrect: false },
            { text: "W złożoności $O(n \\log n)$ po posortowaniu tablicy.", isCorrect: false }
        ]
    },
    {
        id: 62,
        category: "Grafy: Przeszukiwanie (BFS / DFS)",
        text: "Jakiego koloru jest wierzchołek, który znajduje się obecnie wewnątrz kolejki operacyjnej podczas wykonywania algorytmu Przeszukiwania Wszerz (BFS)?",
        options: [
            { text: "Szarego (GRAY).", isCorrect: true },
            { text: "Białego (WHITE).", isCorrect: false },
            { text: "Czarnego (BLACK).", isCorrect: false },
            { text: "Czerwonego (RED).", isCorrect: false }
        ]
    },
    {
        id: 63,
        category: "Grafy: Przeszukiwanie (BFS / DFS)",
        text: "Jak oznaczany jest czas rozpoczęcia i zakończenia przetwarzania węzła w operacji przeszukiwania w głąb `DFS-Visit(u)`?",
        options: [
            { text: "Jako dwie zmienne czasu: czas wejścia `u->d` (discovery) oraz czas wyjścia `u->f` (finish).", isCorrect: true },
            { text: "Jako głębokość w drzewie przeszukiwań (depth).", isCorrect: false },
            { text: "Pobierany jest jedynie znacznik `YELLOW` zastępowany na sam koniec przez `WHITE`.", isCorrect: false },
            { text: "Jako liczba wchodzących odgałęzień wierzchołka `u`.", isCorrect: false }
        ]
    },
    {
        id: 64,
        category: "Grafy: Minimalne Drzewo Rozpinające (MST)",
        text: "Jakie wartości startowe nadaje się tablicy kluczy (`key[v]`) w procedurze algorytmu Prima `MST-Prim` dla wszystkich wierzchołków?",
        options: [
            { text: "Dla wszystkich z wyjątkiem korzenia nadawana jest wartość $\\infty$ (nieskończoność).", isCorrect: true },
            { text: "Wszystkie klucze zostają wyzerowane (`0`).", isCorrect: false },
            { text: "Nadawana jest im ujemna wartość $-1$.", isCorrect: false },
            { text: "Każdy wierzchołek przechowuje sumę wag jego bezpośrednich incydencji.", isCorrect: false }
        ]
    },
    {
        id: 65,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "Który fragment decyduje o aktualizacji wagi d[v] w procedurze `Relax(u, v, w)` używanej w algorytmach Bellmana-Forda i Dijkstry?",
        options: [
            { text: "Warunek `if (d[v] > d[u] + w(u,v))`.", isCorrect: true },
            { text: "Pętla `while (d[v] != \infty)`.", isCorrect: false },
            { text: "Warunek `if (w(u,v) < 0)` sprawdzający ujemne wagi krawędzi.", isCorrect: false },
            { text: "Zawsze wykonuje relaksację, bez dodatkowych warunków na wartości $d[v]$.", isCorrect: false }
        ]
    },
    {
        id: 66,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "Co udowadnia operacja iterowania po krawędziach i warunek `if (d[v] > d[u] + w(u,v))` w ostatniej fazie w pseudokodzie algorytmu Bellmana-Forda?",
        options: [
            { text: "Wykrywa obecność cyklu o wagach ujemnych, zwracając status braku rozwiązania (False).", isCorrect: true },
            { text: "Pobiera z kolejki minimum dla każdego pozostałego wierzchołka.", isCorrect: false },
            { text: "Pozwala odciąć graf w miejscach składowych silnie spójnych.", isCorrect: false },
            { text: "Optymalizuje znalezienie drogi przez modyfikację odległości heurystycznej.", isCorrect: false }
        ]
    },
    {
        id: 67,
        category: "Grafy: Minimalne Drzewo Rozpinające (MST)",
        text: "Co dokładnie robi algorytm Kruskala zaraz po umieszczeniu każdego wierzchołka w osobnej strukturze `MakeSet(v)`?",
        options: [
            { text: "Sortuje zbiór krawędzi `E` malejąco względem ich rosnących wag w.", isCorrect: true },
            { text: "Wybiera najdroższą krawędź do wyeliminowania z minimalnego przekroju.", isCorrect: false },
            { text: "Rekurencyjnie wykonuje połączenie za pomocą algorytmu `DFS` z powrotem krawędzi.", isCorrect: false },
            { text: "Dołącza losowe gałęzie do poddrzew, aż zaspokoi zależność $|E| = |V| - 1$.", isCorrect: false }
        ]
    },
    {
        id: 68,
        category: "Grafy: Najkrótsze Ścieżki (wszystkie pary)",
        text: "Z jakiej równości rekurencyjnej korzysta klasyczny algorytm Floyda-Warshalla zawarty w potrójnej pętli iteracyjnej?",
        options: [
            { text: "$D_k(i,j) = \\min(D_{k-1}(i,j), D_{k-1}(i,k) + D_{k-1}(k,j))$", isCorrect: true },
            { text: "$D_k(i,j) = D_{k-1}(i,j) + D_{k-1}(i,k) - D_{k-1}(k,j)$", isCorrect: false },
            { text: "$D_k(i,j) = \\max(D_{k-1}(i,j), w(i, j))$", isCorrect: false },
            { text: "$D_k(i,j) = \\sum D_{k-1}(i,k)$", isCorrect: false }
        ]
    },

    {
        id: 69,
        category: "1. Sortowanie: Merge Sort",
        text: "W procedurze scalania `Merge(A, left, mid, right)` zapisanej w pseudokodzie, jaki warunek sprawdzany jest w głównej pętli `while`, by decydować o pobieraniu elementów z podtablic?",
        options: [
            { text: "`while (idL <= mid && idR <= right)`", isCorrect: true },
            { text: "`while (idL < mid && idR < right)`", isCorrect: false },
            { text: "`while (idL != mid || idR != right)`", isCorrect: false },
            { text: "`while (idB < right - left + 1)`", isCorrect: false }
        ]
    },
    {
        id: 70,
        category: "2. Sortowanie: Heap Sort",
        text: "Dlaczego główna pętla w procedurze `Heapsort(A)` iteruje w dół aż do wartości 2 (`downto 2`), a nie do 1?",
        options: [
            { text: "Gdy w kopcu zostaje 1 element, znajduje się on już na właściwej, posortowanej pozycji w tablicy.", isCorrect: true },
            { text: "Pętla do 1 spowodowałaby błąd `IndexOutOfBounds` przy wywołaniu `Heapify`.", isCorrect: false },
            { text: "Ostatni element jest sztucznym wartownikiem (sentinel).", isCorrect: false },
            { text: "Algorytm przetwarza elementy parami, więc indeks 1 jest uwzględniany razem z 2.", isCorrect: false }
        ]
    },
    {
        id: 71,
        category: "3. Sortowanie: Quick Sort",
        text: "W procedurze `Partition(A, p, r)` w wariancie Hoare'a, jakie są początkowe wartości wskaźników `i` oraz `j` przed wejściem w nieskończoną pętlę `while (true)`?",
        options: [
            { text: "`i = p - 1` oraz `j = r + 1`", isCorrect: true },
            { text: "`i = p` oraz `j = r`", isCorrect: false },
            { text: "`i = p` oraz `j = r - 1`", isCorrect: false },
            { text: "`i = 0` oraz `j = length[A]`", isCorrect: false }
        ]
    },
    {
        id: 72,
        category: "4. Sortowanie: Counting Sort",
        text: "Dlaczego w ostatniej fazie procedury `Counting Sort`, przepisującej elementy do tablicy wynikowej `B`, pętla iteruje od `n` w dół do 1 (`downto 1`)?",
        options: [
            { text: "Aby zachować stabilność sortowania (elementy o równych kluczach zachowują oryginalny porządek).", isCorrect: true },
            { text: "Aby poprawnie wyzerować tablicę `C` w tym samym przebiegu.", isCorrect: false },
            { text: "Ponieważ algorytm sortuje liczby malejąco.", isCorrect: false },
            { text: "Z powodu indeksowania tablicy od tyłu w strukturze stosu.", isCorrect: false }
        ]
    },
    {
        id: 73,
        category: "5. Sortowanie: Bucket Sort",
        text: "W algorytmie `Bucket-Sort(A)`, jaka formuła matematyczna jest używana do przypisania elementu wejściowego `A[i]` do odpowiedniego kubełka w tablicy `B`?",
        options: [
            { text: "`FLOOR(n * A[i])`", isCorrect: true },
            { text: "`A[i] mod n`", isCorrect: false },
            { text: "`CEILING(A[i] / n)`", isCorrect: false },
        ]
    },
    {
        id: 74,
        category: "6. Struktury danych: Kopce",
        text: "Co zakłada prewarunek procedury `Heapify(A, i)` dotyczący lewego i prawego dziecka węzła `i`?",
        options: [
            { text: "Poddrzewa o korzeniach w `Left(i)` oraz `Right(i)` są już poprawnymi kopcami.", isCorrect: true },
            { text: "Węzeł `i` jest większy od obu swoich dzieci.", isCorrect: false },
            { text: "Węzły potomne są posortowane rosnąco w strukturze tablicy.", isCorrect: false },
            { text: "Wysokość obu poddrzew jest dokładnie taka sama.", isCorrect: false }
        ]
    },
    {
        id: 75,
        category: "9. Struktury danych: Kolejka FIFO",
        text: "W tablicowej implementacji kolejki cyklicznej, co dzieje się ze wskaźnikiem usunięcia (`head[Q]`) w procedurze `Dequeue(Q)`, gdy osiągnie on koniec tablicy `length[Q]`?",
        options: [
            { text: "Wraca na początek tablicy: `head[Q] = 1`.", isCorrect: true },
            { text: "Ustawiany jest na wartość `NIL`, blokując kolejne operacje.", isCorrect: false },
            { text: "Tablica jest realokowana, a `head[Q]` wskazuje na jej środek.", isCorrect: false },
            { text: "Zgłaszany jest wyjątek `overflow`.", isCorrect: false }
        ]
    },
    {
        id: 76,
        category: "11. Struktury danych: Drzewa Czerwono-Czarne",
        text: "Co wyzwala naprawę w pętli `while` podczas wstawiania w procedurze `rbInsert(x)`?",
        options: [
            { text: "Fakt, że rodzic nowo wstawionego, czerwonego węzła jest również czerwony: `x->p->color == RED`.", isCorrect: true },
            { text: "Wykrycie naruszenia współczynnika balansu $BF > 1$.", isCorrect: false },
            { text: "Sytuacja, gdy nowo wstawiony węzeł nadpisze istniejący klucz.", isCorrect: false },
            { text: "Fakt, że wujek wstawianego węzła jest zawsze czarny.", isCorrect: false }
        ]
    },
    {
        id: 77,
        category: "12. Struktury danych: Drzewa Czerwono-Czarne",
        text: "W \"Przypadku 1\" procedury `rbInsert(x)` w drzewie czerwono-czarnym (gdy rodzic i wujek są CZERWONI), jakie operacje zmiany kolorów zachodzą?",
        options: [
            { text: "Rodzic i wujek stają się CZARNI, a dziadek staje się CZERWONY.", isCorrect: true },
            { text: "Rodzic staje się CZARNY, a nowo dodany węzeł pozostaje CZERWONY, kończąc naprawę.", isCorrect: false },
            { text: "Dziadek staje się CZARNY, a całe poddrzewo zostaje obrócone w prawo.", isCorrect: false },
            { text: "Węzeł `x` staje się CZARNY, co pociąga za sobą czarną rotację dziadka.", isCorrect: false }
        ]
    },
    {
        id: 78,
        category: "19. Algorytmy grafowe: Kruskal",
        text: "W algorytmie Kruskala `MST-Kruskal(G, w)`, jaki warunek jest warunkiem dodania badanej krawędzi `(u,v)` do lasu drzew rozpinających `A`?",
        options: [
            { text: "Jej wierzchołki końcowe należą do różnych zbiorów (`FindSet(u) != FindSet(v)`).", isCorrect: true },
            { text: "Waga krawędzi `w(u,v)` jest ujemna, by spełnić zasady relaksacji.", isCorrect: false },
            { text: "Przynajmniej jeden z wierzchołków jest zabarwiony na `WHITE`.", isCorrect: false },
            { text: "Liczba krawędzi w `A` nie przekroczyła $|V|$.", isCorrect: false }
        ]
    },
    {
        id: 79,
        category: "21. Algorytmy grafowe: Floyd-Warshall",
        text: "Czym jest macierz startowa $D_0$ używana do inicjalizacji algorytmu Floyda-Warshalla?",
        options: [
            { text: "Bezpośrednią macierzą wag krawędzi między parami wierzchołków (gdzie krawędzie nieistniejące to $\\infty$).", isCorrect: true },
            { text: "Macierzą jednostkową (identity matrix).", isCorrect: false },
            { text: "Macierzą przepustowości rezydualnych grafu $c_f$.", isCorrect: false },
            { text: "Wymuszonym przez definicję wyznacznikiem grafu transponowanego.", isCorrect: false }
        ]
    },
    {
        id: 80,
        category: "22. Algorytmy grafowe: Floyd-Warshall",
        text: "Co oznacza wewnętrzne odwołanie $D_{k}(i, j) = \\min(D_{k-1}(i, j), D_{k-1}(i, k) + D_{k-1}(k, j))$ w algorytmie Floyda-Warshalla?",
        options: [
            { text: "Sprawdzamy, czy dopuszczenie węzła `k` jako wierzchołka pośredniego skróci dotychczasową najkrótszą ścieżkę od `i` do `j`.", isCorrect: true },
            { text: "Liczymy maksymalny przypływ w sieci blokującej użycie krawędzi o indeksie `k`.", isCorrect: false },
            { text: "Sprawdzamy obecność ujemnego cyklu wykorzystując twierdzenie o relaksacji trójkątnej.", isCorrect: false },
            { text: "Aktualizujemy zbiór krawędzi mostujących na grafach spójnych.", isCorrect: false }
        ]
    },
    {
        id: 81,
        category: "23. Algorytmy grafowe: Ford-Fulkerson",
        text: "Jak zdefiniowana jest przepustowość nowej ścieżki powiększającej $c_f(p)$ znalezionej w sieci rezydualnej wewnątrz `FORD-FULKERSON(G,s,t)`?",
        options: [
            { text: "Jako minimum przepustowości rezydualnych wszystkich krawędzi na ścieżce `p` (`min {cf(u,v) : (u,v) in p}`).", isCorrect: true },
            { text: "Jako suma pojemności krawędzi pomniejszona o sumaryczny przepływ.", isCorrect: false },
            { text: "Jako największa wartość krawędzi ujemnej na drodze przepływu.", isCorrect: false },
            { text: "Jako maksymalna możliwa waga przekroju grafu oddzielającego punkt startowy.", isCorrect: false }
        ]
    },
    {
        id: 82,
        category: "24. Algorytmy Tekstowe: Rabin-Karp",
        text: "Jak przebiega inicjalizacja zmiennej wzorca `p` (hash wzorca) oraz pierwszego okna tekstu `t_0` w algorytmie Rabina-Karpa?",
        options: [
            { text: "Za pomocą pętli o długości `m` iterującej po znakach `P[i]` oraz `T[i]`, wielokrotnie aplikując operacje `(d * p + val) mod q`.", isCorrect: true },
            { text: "Poprzez spłaszczenie ciągów znaków funkcją `XOR` w czasie $O(1)$.", isCorrect: false },
            { text: "Tworząc strukturę drzewa sufiksowego i wywołując na nim post-order.", isCorrect: false },
            { text: "Pobierając wielokrotność liczby pierwszej z tablicy z przeskokami.", isCorrect: false }
        ]
    },
    {
        id: 83,
        category: "25. Algorytmy Tekstowe: Rabin-Karp",
        text: "W głównej pętli wyszukującej algorytmu Rabina-Karpa, co dzieje się, gdy sumy kontrolne się zgadzają (`p == t_s`)?",
        options: [
            { text: "Wywoływane jest dokładne (naiwne) sprawdzenie znak po znaku `P[1..m] == T[s+1..s+m]`, by uniknąć fałszywych trafień (spurious hits).", isCorrect: true },
            { text: "Natychmiast zwracany jest indeks wystąpienia jako absolutnie potwierdzony wynik.", isCorrect: false },
            { text: "Baza modułu `q` zostaje zmieniona na większą liczbę pierwszą celem sprawdzenia krzyżowego.", isCorrect: false },
            { text: "Wzorzec obracany jest zgodnie z tablicą rotacji.", isCorrect: false }
        ]
    },
    {
        id: 84,
        category: "30. Algorytmy Kompresji: Kodowanie Huffmana",
        text: "W algorytmie `HUFFMAN(C)`, jaka operacja jest wykonywana tuż po tym jak przypiszemy łączną częstość `f[z] = f[z->left] + f[z->right]`?",
        options: [
            { text: "Węzeł `z` jest wprowadzany z powrotem do kolejki priorytetowej `INSERT(Q, z)` w celu uwzględnienia go w kolejnych scaleniach.", isCorrect: true },
            { text: "Następuje zwrócenie skompresowanego ciągu wywołań kodowania bitowego.", isCorrect: false },
            { text: "Wynikowy węzeł zostaje zamalowany na CZARNO w przypadku zachowania zasad AVL.", isCorrect: false },
            { text: "Kolejka dokonuje kompresji wymuszonej, zwalniając pamięć po nieużywanych znakach.", isCorrect: false }
        ]
    },
    {
        id: 85,
        category: "Analiza Algorytmów: Koszt Zamortyzowany",
        text: "W analizie kosztu zamortyzowanego (metoda księgowania / accounting method) dla tablic dynamicznych, ile kredytów (jednostek kosztu) standardowo przypisuje się operacji wstawienia, by pokryć przyszłą realokację?",
        options: [
            { text: "3 jednostki (1 na bieżące wstawienie, 1 na skopiowanie tego elementu w przyszłości, 1 na skopiowanie starego elementu).", isCorrect: true },
            { text: "1 jednostkę, ponieważ realokacja dzieje się rzadko i jej koszt dąży do zera.", isCorrect: false },
            { text: "$\\log n$ jednostek, co odpowiada głębokości drzewa wywołań.", isCorrect: false },
            { text: "$n$ jednostek przy każdym wstawieniu.", isCorrect: false }
        ]
    },
    {
        id: 86,
        category: "Analiza Algorytmów: Koszt Zamortyzowany",
        text: "Czym charakteryzuje się analiza zamortyzowana metodą kosztu sumarycznego (aggregate method)?",
        options: [
            { text: "Polega na udowodnieniu, że ciąg $n$ operacji w najgorszym razie trwa $T(n)$, z czego wyciąga się średnią $T(n)/n$ dla jednej operacji.", isCorrect: true },
            { text: "Do każdego stanu struktury przypisuje pewną funkcję potencjału $\\Phi$, która rośnie i maleje w czasie.", isCorrect: false },
            { text: "Opiera się na rachunku prawdopodobieństwa i oczekiwanym czasie wykonania dla losowych danych.", isCorrect: false },
            { text: "Zakłada obciążanie niektórych operacji wirtualnym kosztem (kredytami).", isCorrect: false }
        ]
    },
    {
        id: 87,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Które z poniższych są ZAWSZE spełnionymi własnościami drzewa Czerwono-Czarnego (zgodnie z definicją z wykładu/Cormena)?",
        options: [
            { text: "Każdy węzeł jest czerwony albo czarny.", isCorrect: true },
            { text: "Każdy liść (węzeł NIL) jest czarny.", isCorrect: true },
            { text: "Jeśli węzeł jest czerwony, to obaj jego synowie muszą być czarni.", isCorrect: true },
            { text: "Długość najdłuższej ścieżki od korzenia do liścia jest równa długości najkrótszej.", isCorrect: false }
        ]
    },
    {
        id: 88,
        category: "Struktury Danych: Drzewa Czerwono-Czarne (RB)",
        text: "Czym jest 'czarna wysokość' (black-height) węzła w drzewie Czerwono-Czarnym?",
        options: [
            { text: "Liczbą czarnych węzłów na dowolnej ścieżce od tego węzła (nie licząc go) do węzła potomnego NIL.", isCorrect: true },
            { text: "Całkowitą liczbą czarnych węzłów w całym drzewie.", isCorrect: false },
            { text: "Różnicą między liczbą czarnych i czerwonych węzłów w prawym poddrzewie.", isCorrect: false },
            { text: "Zamortyzowanym kosztem zmiany koloru węzła z czarnego na czerwony.", isCorrect: false }
        ]
    },
    {
        id: 89,
        category: "Struktury Danych: Drzewa Przedziałowe",
        text: "Jakie dodatkowe informacje (poza standardowymi atrybutami drzewa BST) muszą być przechowywane w każdym węźle drzewa przedziałowego (Interval Tree), aby wyszukiwanie przecięć zajmowało $O(\\log n)$?",
        options: [
            { text: "Wartość `max` – maksymalny prawy koniec ze wszystkich przedziałów znajdujących się w poddrzewie tego węzła.", isCorrect: true },
            { text: "Wartość `size` – liczba elementów znajdujących się w jego prawym poddrzewie.", isCorrect: false },
            { text: "Pole `color` – dla utrzymania zrównoważenia za pomocą własności przedziałów.", isCorrect: false },
            { text: "Tablica wszystkich punktów pokrywających się z przedziałem bazowym.", isCorrect: false }
        ]
    },
    {
        id: 90,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "Z jakich heurystyk korzysta oryginalny algorytm Boyera-Moore'a do optymalizacji przesunięć wzorca względem tekstu?",
        options: [
            { text: "Heurystyki \"złego znaku\" (bad character) oraz heurystyki \"dobrego sufiksu\" (good suffix).", isCorrect: true },
            { text: "Tablicy najdłuższych prefikso-sufiksów ($\\pi$).", isCorrect: false },
            { text: "Współczynnika zagęszczenia (load factor).", isCorrect: false },
            { text: "Skracania wskaźników (pointer jumping).", isCorrect: false }
        ]
    },
    {
        id: 91,
        category: "Algorytmy Tekstowe: KMP",
        text: "Czego dokładnie dotyczy wartość $\\pi[q]$ w tablicy (funkcji) przejść w algorytmie Knutha-Morrisa-Pratta?",
        options: [
            { text: "Długości najdłuższego właściwego prefiksu wzorca, który jest jednocześnie właściwym sufiksem podciągu wzorca kończącego się na pozycji $q$.", isCorrect: true },
            { text: "Indeksu, o który należy przesunąć okno, gdy znak na pozycji $q$ w tekście nie pasuje.", isCorrect: false },
            { text: "Liczby powtórzeń danego znaku przed indeksem $q$.", isCorrect: false },
            { text: "Odległości od początku wzorca do ostatniego wystąpienia znaku niezgodnego.", isCorrect: false }
        ]
    },
    {
        id: 92,
        category: "Kompresja Danych",
        text: "Zgodnie z Teorią Informacji Shannona, jeśli litera 'e' występuje w tekście bardzo często, a litera 'q' bardzo rzadko, to jak w optymalnym kodzie (np. Huffmana) będą wyglądały ich reprezentacje bitowe?",
        options: [
            { text: "Częsta litera 'e' dostanie krótki kod bitowy, a rzadka 'q' bardzo długi.", isCorrect: true },
            { text: "Obie litery otrzymają kody tej samej długości, ale 'e' będzie zawierała więcej jedynek.", isCorrect: false },
            { text: "Rzadka litera 'q' dostanie krótszy kod by oszczędzić operacje przeszukiwania w drzewie.", isCorrect: false },
            { text: "Będą miały stałą długość, wynikającą z wyliczenia logarytmu przy podstawie 2 z wielkości alfabetu.", isCorrect: false }
        ]
    },
    {
        id: 93,
        category: "Kompresja Danych",
        text: "Jakie jest główne założenie i sposób działania kompresji LZW w stosunku do kodowania Huffmana?",
        options: [
            { text: "LZW opiera się na budowaniu słownika w czasie rzeczywistym ze spotykanych ciągów znaków (jest algorytmem słownikowym).", isCorrect: true },
            { text: "LZW wymaga dwukrotnego przejścia przez plik (najpierw obliczenie częstotliwości, potem kodowanie).", isCorrect: false },
            { text: "LZW zawsze generuje optymalne drzewo binarne minimalizujące entropię całego pliku.", isCorrect: false },
            { text: "LZW sprawdza się tylko dla danych ciągłych (multimedia), a Huffman tylko dla tekstów.", isCorrect: false }
        ]
    },
    {
        id: 94,
        category: "Algorytmy Równoległe: Taksonomia Flynna",
        text: "Co charakteryzuje architekturę SIMD (Single Instruction, Multiple Data) w taksonomii Flynna?",
        options: [
            { text: "Jeden strumień instrukcji jest wykonywany równocześnie na wielu różnych danych (np. operacje wektorowe na nowoczesnych GPU).", isCorrect: true },
            { text: "Wiele procesorów wykonuje różne instrukcje na tych samych danych dla redundancji (odporność na błędy).", isCorrect: false },
            { text: "Asynchroniczne wykonywanie wielu wątków instrukcji na wielu różnych porcjach danych (typowy wielordzeniowy procesor).", isCorrect: false },
            { text: "Wykonywanie pojedynczego kodu jednowątkowego bez jakiejkolwiek równoległości.", isCorrect: false }
        ]
    },
    {
        id: 95,
        category: "Algorytmy Równoległe: PRAM",
        text: "Co oznacza skrót CREW w kontekście modeli równoległej maszyny RAM (PRAM)?",
        options: [
            { text: "Concurrent Read, Exclusive Write - Wiele procesorów może jednocześnie czytać z tej samej komórki pamięci, ale zapis musi odbywać się na wyłączność.", isCorrect: true },
            { text: "Concurrent Read, Extra Write - Wiele procesorów czyta, zapis dozwolony jest jako operacja dodatkowa o koszcie $O(1)$.", isCorrect: false },
            { text: "Critical Region, Exclusive Write - Sekcja krytyczna blokuje współbieżny dostęp do wyłącznego zapisu.", isCorrect: false },
            { text: "Constant Read, Equivalent Write - Zapisy równe kosztowo odczytom w pamięci stałej.", isCorrect: false }
        ]
    },
    {
        id: 96,
        category: "Algorytmy Sortowania: Teoria",
        text: "Z modelu Drzewa Decyzyjnego dla algorytmów sortowania wynikają ważne ograniczenia matematyczne. Co reprezentują liście takiego drzewa przy sortowaniu tablicy n-elementowej?",
        options: [
            { text: "Każdy liść reprezentuje jedną z $n!$ możliwych permutacji elementów tablicy, które algorytm traktuje jako poprawny, posortowany wynik.", isCorrect: true },
            { text: "Reprezentują wynik każdego wywołania instrukcji 'swap'.", isCorrect: false },
            { text: "Reprezentują maksymalną wysokość kopca binarnego w Heapsorcie.", isCorrect: false },
            { text: "Reprezentują poszczególne elementy wchodzące w skład posortowanej tablicy.", isCorrect: false }
        ]
    },
    {
        id: 97,
        category: "Sieci Przepływowe: Skojarzenia",
        text: "Jak należy zmodyfikować graf dwudzielny $G=(V, E)$, aby problem znalezienia maksymalnego skojarzenia w nim można było rozwiązać za pomocą algorytmu Forda-Fulkersona?",
        options: [
            { text: "Dodać super-źródło $s$ połączone ze wszystkimi węzłami z lewego zbioru krawędziami o przepustowości 1 oraz super-ujście $t$, do którego wchodzą krawędzie o przepustowości 1 ze wszystkich węzłów z prawego zbioru.", isCorrect: true },
            { text: "Każdej istniejącej krawędzi przypisać wagę ujemną i uruchomić algorytm Bellmana-Forda.", isCorrect: false },
            { text: "Dodać pętle zwrotne o wadze $\\infty$ dla każdego węzła.", isCorrect: false },
            { text: "Ustawić wszystkim krawędziom w grafie wagę proporcjonalną do ich stopnia wychodzącego.", isCorrect: false }
        ]
    },
    {
        id: 98,
        category: "Grafy: Przeszukiwanie (DFS)",
        text: "Krawędzie \"w przód\" (forward edges) w lesie przeszukiwania w głąb (DFS) to:",
        options: [
            { text: "Krawędzie niedrzewowe $(u,v)$ łączące wierzchołek $u$ z jego potomkiem $v$ w drzewie DFS.", isCorrect: true },
            { text: "Krawędzie łączące $u$ z węzłem w innej, już odwiedzonej składowej.", isCorrect: false },
            { text: "Krawędzie tworzące cykle w grafie (łączące z przodkiem).", isCorrect: false },
            { text: "Krawędzie wybierane zachłannie na podstawie najniższej wagi.", isCorrect: false }
        ]
    },
    {
        id: 99,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Na czym polega zjawisko \"pierwotnego grupowania\" (primary clustering), występujące przy rozwiązywaniu kolizji w tablicach haszujących?",
        options: [
            { text: "Długie ciągi zajętych miejsc w tablicy stają się coraz dłuższe, ponieważ każdy wolny slot w sąsiedztwie takiego ciągu ma większe prawdopodobieństwo na zostane zapełnionym.", isCorrect: true },
            { text: "Dane są grupowane wewnątrz list wiązanych, które wydłużają się w nieskończoność powodując czas wyszukiwania $O(n)$.", isCorrect: false },
            { text: "Pojawia się gdy funkcja haszująca ignoruje wartości dodatnie, przypisując wszystko do jednej grupy.", isCorrect: false },
            { text: "Zjawisko wywołane jest w momencie wykorzystywania dwóch oddzielnych funkcji haszujących (double hashing).", isCorrect: false }
        ]
    },
    {
        id: 100,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Przy haszowaniu otwartym (open addressing), jaką wartość należy wpisać w miejscu po usuniętym elemencie, aby procedura `HASH-SEARCH` mogła nadal działać poprawnie?",
        options: [
            { text: "Specjalną wartość `DELETED` (zamiast `NIL`), aby pętla szukająca nie zatrzymała się przedwcześnie w trakcie kolizji.", isCorrect: true },
            { text: "Należy przywrócić domyślną wartość `NIL`, aby slot był wolny.", isCorrect: false },
            { text: "Usunąć element przez przetasowanie (skrócenie) tablicy o 1.", isCorrect: false },
            { text: "Wartość `-1`, chyba że w tablicy były klucze ujemne, wtedy `0`.", isCorrect: false }
        ]
    },
    {
        id: 101,
        category: "Grafy: Najkrótsze Ścieżki na DAG",
        text: "Jaki jest pierwszy krok przy poszukiwaniu najkrótszych ścieżek z jednego źródła w Skierowanym Grafie Acyklicznym (DAG), zanim zaczniemy dokonywać relaksacji?",
        options: [
            { text: "Należy posortować topologicznie wierzchołki grafu.", isCorrect: true },
            { text: "Należy wybudować na nich strukturę Kopca Fibonacciego.", isCorrect: false },
            { text: "Należy zamienić wszystkie ewentualne ujemne wagi na ich bezwzględną wartość.", isCorrect: false },
            { text: "Uruchomić algorytm BFS w celu zbadania acykliczności.", isCorrect: false }
        ]
    },
    {
        id: 102,
        category: "2. Algorytmy Sortowania: Merge Sort",
        text: "W której dokładnie linii pseudokodu procedury `Merge` (scalania) zagwarantowana jest stabilność sortowania przez scalanie?",
        options: [
            { text: "W warunku `if (L[i] <= R[j])` – wybór elementu z lewej tablicy w przypadku remisu zapewnia stabilność.", isCorrect: true },
            { text: "Podczas obliczania punktu podziału `mid = floor((left + right) / 2)`.", isCorrect: false },
            { text: "W pętlach sprzątających (`for i = idL to mid ...`).", isCorrect: false },
            { text: "Merge Sort z definicji nie jest stabilny.", isCorrect: false }
        ]
    },
    {
        id: 103,
        category: "2. Algorytmy Sortowania: Quicksort",
        text: "Dlaczego zrandomizowany Quicksort (z losowym wyborem pivota) chroni przed złośliwymi danymi wejściowymi?",
        options: [
            { text: "Ponieważ wymusza, by oczekiwany (średni) czas wykonania wynosił $O(n \\log n)$ niezależnie od początkowego układu danych.", isCorrect: true },
            { text: "Ponieważ obniża pesymistyczny czas działania do bezwzględnego $O(n \\log n)$.", isCorrect: false },
            { text: "Dzięki losowaniu, procedura `Partition` ignoruje powtarzające się elementy.", isCorrect: false },
            { text: "Losowanie gwarantuje idealny podział tablicy na połowy w każdym kroku rekursji.", isCorrect: false }
        ]
    },
    {
        id: 104,
        category: "3. Struktury Danych: Kopce",
        text: "W tablicowej reprezentacji kopca binarnego indeksowanego od $1$, w jaki sposób ustala się pozycje potomków oraz rodzica węzła $i$?",
        options: [
            { text: "Lewe dziecko: $2i$, Prawe dziecko: $2i + 1$, Rodzic: $\\lfloor i/2 \\rfloor$.", isCorrect: true },
            { text: "Lewe dziecko: $2i + 1$, Prawe dziecko: $2i + 2$, Rodzic: $\\lfloor (i-1)/2 \\rfloor$.", isCorrect: false },
            { text: "Lewe dziecko: $i+1$, Prawe dziecko: $i+2$, Rodzic: $i-1$.", isCorrect: false },
            { text: "Nie da się tego ustalić operacjami arytmetycznymi, wymagane są wskaźniki `left` i `right`.", isCorrect: false }
        ]
    },
    {
        id: 105,
        category: "3. Struktury Danych: Kopce",
        text: "Co charakteryzuje procedurę `Build-Max-Heap(A)`?",
        options: [
            { text: "Działa w czasie $O(n)$, pomimo że używa w pętli procedury `Heapify` o koszcie $O(\\log n)$.", isCorrect: true },
            { text: "Iteruje po elementach tablicy w kolejności od $1$ do $\\lfloor n/2 \\rfloor$.", isCorrect: false },
            { text: "Jej złożoność w najgorszym przypadku to ściśle $O(n \\log n)$.", isCorrect: false },
            { text: "Buduje kopiec wykonując procedurę `Heap-Insert` $n$ razy.", isCorrect: false }
        ]
    },
    {
        id: 106,
        category: "4. Struktury Danych: Drzewa BST",
        text: "Zgodnie z procedurą `Tree-Delete(T, z)`, co robi algorytm, gdy węzeł $z$ do usunięcia ma dwoje dzieci?",
        options: [
            { text: "Zastępuje węzeł $z$ jego następnikiem $y$ (który na pewno nie ma lewego dziecka), po czym wycina $y$ z jego pierwotnej pozycji.", isCorrect: true },
            { text: "Zastępuje węzeł $z$ prawym dzieckiem i podpina lewe dziecko pod skrajnie lewy węzeł prawego poddrzewa.", isCorrect: false },
            { text: "Przenosi $z$ do liścia poprzez rotacje i wtedy go usuwa.", isCorrect: false },
            { text: "Zamienia klucz węzła $z$ z kluczem w korzeniu i usuwa korzeń.", isCorrect: false }
        ]
    },
    {
        id: 107,
        category: "4. Struktury Danych: Drzewa AVL i RB",
        text: "Ile maksymalnie rotacji (nie licząc zmiany kolorów) może wymagać procedura wstawiania elementu do drzewa Czerwono-Czarnego w celu przywrócenia jego właściwości?",
        options: [
            { text: "Co najwyżej 2 rotacji.", isCorrect: true },
            { text: "$O(\\log n)$ rotacji.", isCorrect: false },
            { text: "1 rotacji.", isCorrect: false },
            { text: "Zależy to liniowo od liczby czarnych węzłów.", isCorrect: false }
        ]
    },
    {
        id: 108,
        category: "4. Struktury Danych: Tablice Haszujące",
        text: "Jakie jest główne ograniczenie i problem metody adresowania liniowego (linear probing) w tablicach haszujących?",
        options: [
            { text: "Grupowanie pierwotne (primary clustering) – tworzenie się długich ciągów zajętych komórek, co wydłuża średni czas poszukiwania.", isCorrect: true },
            { text: "Konieczność alokacji zewnętrznych list dowiązaniowych.", isCorrect: false },
            { text: "Brak możliwości poprawnego usunięcia elementu z tablicy.", isCorrect: false },
            { text: "Koszty związane z wyliczaniem wielu funkcji haszujących w każdym kroku.", isCorrect: false }
        ]
    },
    {
        id: 109,
        category: "5. Algorytmy Grafowe: BFS i DFS",
        text: "Na czym polega klasyfikacja krawędzi poprzecznych (cross edges) w algorytmie DFS?",
        options: [
            { text: "Są to krawędzie łączące wierzchołki bez relacji przodek-potomek, mogą łączyć wierzchołki w tym samym drzewie DFS lub między różnymi drzewami w lesie DFS.", isCorrect: true },
            { text: "Są to krawędzie prowadzące do przodka (wskazują cykl).", isCorrect: false },
            { text: "Są to krawędzie wyeliminowane podczas budowania drzewa rozpinającego.", isCorrect: false },
            { text: "Są to jedyne krawędzie, które DFS przetwarza przy budowie kolejki dla BFS.", isCorrect: false }
        ]
    },
    {
        id: 110,
        category: "5. Algorytmy Grafowe: Topologiczne Sortowanie",
        text: "Jaki jest główny warunek strukturalny, aby graf mógł zostać posortowany topologicznie?",
        options: [
            { text: "Musi być Skierowanym Grafem Acyklicznym (DAG – Directed Acyclic Graph).", isCorrect: true },
            { text: "Musi być spójny lub silnie spójny.", isCorrect: false },
            { text: "Nie może zawierać wag ujemnych ani ujemnych cykli.", isCorrect: false },
            { text: "Musi być drzewem poszukiwań binarnych.", isCorrect: false }
        ]
    },
    {
        id: 111,
        category: "6. Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "W algorytmie Bellmana-Forda wierzchołki są początkowo inicjalizowane wartościami $d[v] = \\infty$. Ile dokładnie iteracji głównej pętli relaksacji wykonuje ten algorytm (przed sprawdzeniem ujemnych cykli)?",
        options: [
            { text: "Dokładnie $|V| - 1$ iteracji relaksacji każdej krawędzi ze zbioru $E$.", isCorrect: true },
            { text: "Dokładnie $|E|$ iteracji.", isCorrect: false },
            { text: "Iteruje dopóki istnieją krawędzie zmniejszające wagi (pętla while).", isCorrect: false },
            { text: "Dokładnie $|V|$ iteracji, z czego ostatnia zamyka ujemne ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 112,
        category: "6. Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "Która z poniższych właściwości dotyczy algorytmu Floyda-Warshalla?",
        options: [
            { text: "Rozwiązuje problem najkrótszych ścieżek między wszystkimi parami wierzchołków w czasie $O(V^3)$.", isCorrect: true },
            { text: "Wymaga grafu bez ujemnych wag krawędzi.", isCorrect: false },
            { text: "Opiera się na zachłannym poszukiwaniu za pomocą struktury Zbiorów Rozłącznych (Union-Find).", isCorrect: false },
            { text: "Wykorzystuje heurystykę i metodę A* do szybszego znalezienia celu.", isCorrect: false }
        ]
    },
    {
        id: 113,
        category: "7. Algorytmy Grafowe: Minimalne Drzewo Rozpinające",
        text: "Z jaką złożonością czasową operuje algorytm Kruskala z optymalnie zaimplementowaną strukturą zbiorów rozłącznych?",
        options: [
            { text: "$O(E \\log V)$ (zdominowane przez czas sortowania krawędzi).", isCorrect: true },
            { text: "$O(V^2)$ niezależnie od struktury grafu.", isCorrect: false },
            { text: "$O(V + E)$ dzięki liniowemu czasowi algorytmu Union-Find.", isCorrect: false },
            { text: "$O(E + V \\log V)$ co odpowiada osiągom kopca Fibonacciego.", isCorrect: false }
        ]
    },
    {
        id: 114,
        category: "8. Sieci Przepływowe",
        text: "W algorytmie Forda-Fulkersona wprowadzono pojęcie sieci residualnej. Co oznacza pojemność residualna $c_f(u, v)$ krawędzi w przód (zgodnej z grafem pierwotnym)?",
        options: [
            { text: "$c_f(u, v) = c(u, v) - f(u, v)$, czyli o ile jeszcze możemy zwiększyć przepływ.", isCorrect: true },
            { text: "$c_f(u, v) = f(v, u)$, czyli przepływ zwrotny.", isCorrect: false },
            { text: "$c_f(u, v) = c(u, v) + f(u, v)$.", isCorrect: false },
            { text: "Oznacza ostateczną wagę skojarzenia na danej ścieżce po relaksacji.", isCorrect: false }
        ]
    },
    {
        id: 115,
        category: "8. Sieci Przepływowe",
        text: "W jaki sposób rozwiązuje się problem maksymalnego skojarzenia w grafach dwudzielnych (Bipartite Matching)?",
        options: [
            { text: "Sprowadza się go do problemu sieci przepływowej poprzez dodanie super-źródła oraz super-ujścia i ustawieniu pojemności wszystkich krawędzi na 1.", isCorrect: true },
            { text: "Używając algorytmu Dijkstry na krawędziach międzyskładowych.", isCorrect: false },
            { text: "Wykonując przeszukiwanie DFS i zliczając krawędzie poprzeczne.", isCorrect: false },
            { text: "Przy pomocy dynamicznych statystyk pozycyjnych i rang.", isCorrect: false }
        ]
    },
    {
        id: 116,
        category: "9. Wyszukiwanie Wzorca: Boyer-Moore",
        text: "Na czym polega heurystyka \"złego znaku\" w algorytmie Boyera-Moore'a?",
        options: [
            { text: "Gdy znak w tekście nie pasuje do wzorca, przesuwamy wzorzec tak, by to niedopasowane miejsce wyrównało się z ostatnim wystąpieniem tego znaku we wzorcu (lub poza niego).", isCorrect: true },
            { text: "Przesuwamy wzorzec w przód o cały blok na podstawie tablicy prefikso-sufiksów.", isCorrect: false },
            { text: "Polega na modyfikacji samego tekstu w locie w celu podniesienia zgodności znaków.", isCorrect: false },
            { text: "Zamienia znak niezgodny na specjalny wartownik `NIL`.", isCorrect: false }
        ]
    },
    {
        id: 117,
        category: "10. Kompresja Tekstów: LZW",
        text: "W jaki sposób odbywa się inicjalizacja słownika w algorytmie kompresji LZW?",
        options: [
            { text: "Słownik inicjalizowany jest jednoliterowymi symbolami obejmującymi cały wykorzystywany alfabet wejściowy.", isCorrect: true },
            { text: "Słownik na początku jest całkowicie pusty i zapełnia się tylko pełnymi wyrazami.", isCorrect: false },
            { text: "Słownik inicjalizuje się odczytanym z pliku drzewem (zakodowanym w nagłówku).", isCorrect: false },
            { text: "Słownik wypełnia się stałym wektorem przedrostków, np. ASCII od zera do 65535.", isCorrect: false }
        ]
    },
    {
        id: 118,
        category: "2. Algorytmy Sortowania: Counting Sort",
        text: "Gdzie w algorytmie Counting Sort występuje ograniczenie wymagające by dane wejściowe $A[j]$ miały typ całkowitoliczbowy (lub dały się na niego zmapować)?",
        options: [
            { text: "Ponieważ wartości wejściowe $A[j]$ stanowią indeksy wywoływane przy podnoszeniu liczników tablicy pomocniczej $C[A[j]] = C[A[j]] + 1$.", isCorrect: true },
            { text: "Z uwagi na procedurę Merge wymuszającą użycie stosu liczb naturalnych.", isCorrect: false },
            { text: "Tylko liczby całkowite można stabilnie przenieść używając zmiennoprzecinkowego rzutowania w bloku PRAM.", isCorrect: false },
            { text: "Opiera się to na założeniu architektury systemu Flynna odnośnie zagnieżdżeń MISD.", isCorrect: false }
        ]
    },
    {
        id: 119,
        category: "3. Struktury Danych: Analiza",
        text: "Gdy wstawiamy sekwencję rosnących liczb do pustego, klasycznego drzewa BST (nie AVL ani RB), jak będzie wyglądała jego struktura i jaka będzie pesymistyczna złożoność wyszukiwania?",
        options: [
            { text: "Struktura zdegeneruje się do listy jednokierunkowej, a wyszukiwanie będzie trwało $O(n)$.", isCorrect: true },
            { text: "Drzewo zbalansuje się optymalnie (tworząc kopiec), zachowując złożoność $O(\\log n)$.", isCorrect: false },
            { text: "Zostanie podzielone na dwa symetryczne patyki, co obniży złożoność wyszukiwania o połowę.", isCorrect: false },
            { text: "Procedura zakończy się błędem przepełnienia głębokości (overflow error).", isCorrect: false }
        ]
    },
    {
        id: 120,
        category: "7. Algorytmy Grafowe: Kruskal vs Prim",
        text: "Czym strukturalnie i procesowo różni się budowanie MST w algorytmie Prima od budowy w algorytmie Kruskala?",
        options: [
            { text: "Prim cały czas utrzymuje jedno, spójne, rosnące drzewo, a Kruskal utrzymuje las wielu rozłącznych drzew, które powoli się scalają.", isCorrect: true },
            { text: "Prim operuje na wierzchołkach omijając wagi krawędzi, a Kruskal analizuje odległości od źródła.", isCorrect: false },
            { text: "Prim stosowany jest tylko na grafach skierowanych z cyklami, a Kruskal wyłącznie w DAG-ach.", isCorrect: false },
            { text: "Nie ma żadnej widocznej różnicy, to dwa warianty tego samego mechanizmu opartego o tablicę prefiksów.", isCorrect: false }
        ]
    },
    {
        id: 121,
        category: "5. Algorytmy Grafowe: Sortowanie Topologiczne",
        text: "Sortowanie topologiczne to w praktyce:",
        options: [
            { text: "Wywołanie algorytmu DFS i odkładanie wierzchołków w kolejności ich 'zakończenia' na początek pomocniczej listy (odwrotność czasu wyjścia f).", isCorrect: true },
            { text: "Sortowanie grafu algorytmem Heapsort względem stopnia wchodzącego do każdego węzła.", isCorrect: false },
            { text: "Zamiana grafu nieważonego na model MST w celu ustalenia cyklu krytycznego.", isCorrect: false },
            { text: "Poszukiwanie ścieżki Hamiltona relaksując tylko krawędzie poprzeczne.", isCorrect: false }
        ]
    },
    {
        id: 122,
        category: "Algorytmy Sortowania: Radix Sort",
        text: "Jaka jest dokładna złożoność czasowa algorytmu Radix Sort dla $n$ słów/liczb o długości $d$ cyfr, jeśli do stabilnego sortowania użyjemy sortowania przez zliczanie z zakresem wartości $0..k$ dla każdej cyfry?",
        options: [
            { text: "$\\Theta(d(n + k))$", isCorrect: true },
            { text: "$\\Theta(n \\cdot d^k)$", isCorrect: false },
            { text: "$O(n \\log_k d)$", isCorrect: false },
            { text: "$\\Theta(n + d \\cdot k)$", isCorrect: false }
        ]
    },
    {
        id: 123,
        category: "Algorytmy Sortowania: Bucket Sort",
        text: "Zgodnie z procedurą `Bucket-Sort(A)` dla danych wpadających w rozkład jednostajny na przedziale $[0, 1)$, co robi operacja przyporządkowania elementu do kubełka dla tablicy o rozmiarze $n$?",
        options: [
            { text: "Wstawia element $A[i]$ do listy dowiązaniowej znajdującej się pod indeksem $B[\\lfloor n \\cdot A[i] \\rfloor]$.", isCorrect: true },
            { text: "Dzieli wartość $A[i]$ przez $n$ i wyciąga z tego sufit (CEILING).", isCorrect: false },
            { text: "Wykonuje operację $A[i] \\bmod n$ i mapuje do lokalnej tablicy haszującej.", isCorrect: false },
            { text: "Wykorzystuje strukturę Union-Find do pogrupowania kubełków w bloki wielkości $k$.", isCorrect: false }
        ]
    },
    {
        id: 124,
        category: "Struktury Danych: Tablice Haszujące",
        text: "Jak zdefiniowany jest ciąg próbkowania dla haszowania dwukrotnego (double hashing) przy adresowaniu otwartym?",
        options: [
            { text: "$h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$", isCorrect: true },
            { text: "$h(k, i) = (h_1(k) + c_1 \\cdot i + c_2 \\cdot i^2) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) \\cdot h_2(i)) \\bmod m$", isCorrect: false },
            { text: "$h(k, i) = (h_1(k) + i) \\bmod m$", isCorrect: false }
        ]
    },
    {
        id: 125,
        category: "Struktury Danych: Tablice Haszujące",
        text: "W haszowaniu dwukrotnym wartość funkcji pomocniczej $h_2(k)$ musi spełniać pewien matematyczny warunek względem wielkości tablicy $m$. Jaki?",
        options: [
            { text: "Wartość $h_2(k)$ i rozmiar tablicy $m$ muszą być względnie pierwsze (ich największy wspólny dzielnik NWD wynosi 1), aby próbkowanie przeszło przez całą tablicę.", isCorrect: true },
            { text: "Rozmiar tablicy $m$ musi być zawsze podzielny przez $h_2(k)$, by zjawisko primary clusteringu zostało wyeliminowane.", isCorrect: false },
            { text: "Wartość $h_2(k)$ musi wynosić dokładnie $\\log m$.", isCorrect: false },
            { text: "NWD($h_2(k)$, $m$) musi być parzyste, jeśli $m$ jest potęgą dwójki.", isCorrect: false }
        ]
    },
    {
        id: 126,
        category: "Algorytmy Grafowe: Skierowane Grafy Acykliczne (DAG)",
        text: "Na jakiej właściwości topologicznej z DFS opiera się poszukiwanie najkrótszych ścieżek w grafach DAG algorytmem Bellmana-Forda w czasie liniowym $O(V+E)$?",
        options: [
            { text: "W grafie DAG (bez cykli), krawędzie można relaksować dokładnie jeden raz, pod warunkiem robienia tego w kolejności topologicznej wierzchołków.", isCorrect: true },
            { text: "Dla grafu DAG macierz wag jest symetryczna, co redukuje algorytm z $V^3$ do $V+E$.", isCorrect: false },
            { text: "Grafy DAG z definicji nie mogą posiadać krawędzi o wagach ujemnych, więc redukują się do BFS.", isCorrect: false },
            { text: "Wystarczy zbudować Las Rozpinający wykorzystując technikę Find-Set Kruskala.", isCorrect: false }
        ]
    },
    {
        id: 127,
        category: "Algorytmy Grafowe: Minimalne Drzewo Rozpinające (MST)",
        text: "W algorytmie Prima `MST-Prim(G, w, r)`, wartość `key[v]` przechowuje:",
        options: [
            { text: "Najmniejszą wagę spośród krawędzi łączących wierzchołek $v$ z dowolnym wierzchołkiem należącym już do budowanego drzewa.", isCorrect: true },
            { text: "Suma wag wszystkich krawędzi od korzenia początkowego $r$ do $v$.", isCorrect: false },
            { text: "Indeks wierzchołka $v$ z tablicy sąsiedztwa po procesie haszowania.", isCorrect: false },
            { text: "Liczbę krawędzi incydentnych do $v$, które jeszcze nie znalazły się w kolejce priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 128,
        category: "Sieci Przepływowe: Teoria",
        text: "Zgodnie z definicją przepustowości przekroju (Cut capacity) w sieci przepływowej $(S, T)$:",
        options: [
            { text: "Przepustowość przekroju uwzględnia sumę wag wyłącznie krawędzi wychodzących ze zbioru $S$ i wchodzących do $T$.", isCorrect: true },
            { text: "Przepustowość przekroju to suma wag krawędzi w obu kierunkach ($S$ do $T$ oraz $T$ do $S$).", isCorrect: false },
            { text: "Przepustowość ta jest zawsze mniejsza niż jakikolwiek legalny przepływ w sieci.", isCorrect: false },
            { text: "Uwzględnia ona wyłącznie ścieżki powiększające o wartości residualnej większej od zera.", isCorrect: false }
        ]
    },
    {
        id: 129,
        category: "Drzewa AVL",
        text: "Jaki jest główny warunek (niezmiennik), który musi spełniać drzewo AVL, aby uchodzić za zbalansowane?",
        options: [
            { text: "Różnica wysokości lewego i prawego poddrzewa dla każdego węzła wynosi co najwyżej 1 (współczynnik balansu to -1, 0 lub 1).", isCorrect: true },
            { text: "Każdy węzeł musi posiadać dokładnie dwoje lub zero dzieci.", isCorrect: false },
            { text: "Wysokość całego drzewa musi być dokładnie równa $\\log_2 n$.", isCorrect: false },
            { text: "Wartość w każdym węźle musi być średnią arytmetyczną jego dzieci.", isCorrect: false }
        ]
    },
    {
        id: 130,
        category: "Drzewa AVL",
        text: "Jakie wartości może przyjmować współczynnik wyważenia (Balance Factor) w poprawnym drzewie AVL?",
        options: [
            { text: "$-1$", isCorrect: true },
            { text: "$0$", isCorrect: true },
            { text: "$1$", isCorrect: true },
            { text: "$2$", isCorrect: false }
        ]
    },
    {
        id: 131,
        category: "Drzewa AVL",
        text: "Z jaką asymptotyczną złożonością czasową wykonują się operacje Search, Insert i Delete w drzewie AVL?",
        options: [
            { text: "Zawsze w czasie $\\Theta(\\log n)$.", isCorrect: true },
            { text: "Średnio $\\Theta(\\log n)$, ale w najgorszym przypadku $O(n)$.", isCorrect: false },
            { text: "Zawsze w czasie stałym $\\Theta(1)$.", isCorrect: false },
            { text: "Zamortyzowanym $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 132,
        category: "Drzewa AVL",
        text: "Jeśli dodany węzeł zaburzył balans drzewa AVL i spowodował przeciążenie lewego dziecka z jego lewej strony (współczynnik balansu korzenia $> 1$, a lewego dziecka $> 0$), jaką rotację należy wykonać?",
        options: [
            { text: "Pojedynczą rotację w prawo (Right Rotation) na korzeniu.", isCorrect: true },
            { text: "Pojedynczą rotację w lewo (Left Rotation) na korzeniu.", isCorrect: false },
            { text: "Podwójną rotację Left-Right.", isCorrect: false },
            { text: "Podwójną rotację Right-Left.", isCorrect: false }
        ]
    },

    {
        id: 133,
        category: "Sortowanie przez wstawianie",
        text: "Kiedy Sortowanie przez Wstawianie (Insertion Sort) osiąga swój najlepszy czas działania równy $\\Omega(n)$?",
        options: [
            { text: "Gdy tablica wejściowa jest już całkowicie posortowana rosnąco.", isCorrect: true },
            { text: "Gdy tablica jest posortowana malejąco (odwrotnie).", isCorrect: false },
            { text: "Gdy tablica składa się z elementów wygenerowanych całkowicie losowo.", isCorrect: false },
            { text: "Nigdy, najlepszy przypadek to zawsze $\\Omega(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 134,
        category: "Dziel i Zwyciężaj",
        text: "Które z poniższych algorytmów opierają się bezpośrednio na strategii 'Dziel i Zwyciężaj'?",
        options: [
            { text: "Merge Sort (Sortowanie przez scalanie).", isCorrect: true },
            { text: "Quicksort (Sortowanie szybkie).", isCorrect: true },
            { text: "Wyszukiwanie binarne (Binary Search).", isCorrect: true },
            { text: "Bubble Sort (Sortowanie bąbelkowe).", isCorrect: false }
        ]
    },
    {
        id: 135,
        category: "Merge Sort",
        text: "Jaka jest złożoność pamięciowa algorytmu Merge Sort i z czego ona wynika?",
        options: [
            { text: "$O(n)$ - wynika z konieczności utworzenia dodatkowych tablic pomocniczych podczas procesu scalania (Merge).", isCorrect: true },
            { text: "$O(1)$ - algorytm sortuje w miejscu.", isCorrect: false },
            { text: "$O(\\log n)$ - wynika ze stosu wywołań rekurencyjnych.", isCorrect: false },
            { text: "$O(n^2)$ - z powodu tworzenia macierzy decyzji.", isCorrect: false }
        ]
    },
    {
        id: 136,
        category: "Twierdzenie o rekurencji uniwersalnej",
        text: "Aby rozwiązać równanie $T(n) = aT(n/b) + f(n)$ za pomocą Twierdzenia o Rekurencji Uniwersalnej (Master Theorem), jakie warunki muszą spełniać stałe $a$ i $b$?",
        options: [
            { text: "$a \\ge 1$", isCorrect: true },
            { text: "$b > 1$", isCorrect: true },
            { text: "$a > 0$ oraz $b = 1$", isCorrect: false },
            { text: "Funkcja $f(n)$ musi być asymptotycznie równa $0$.", isCorrect: false }
        ]
    },

    {
        id: 137,
        category: "Struktury Danych: Kopiec",
        text: "Co oznacza własność kopca typu MAX (Max-Heap property) dla dowolnego węzła $i$ z pominięciem korzenia?",
        options: [
            { text: "$A[Parent(i)] \\ge A[i]$", isCorrect: true },
            { text: "$A[Parent(i)] \\le A[i]$", isCorrect: false },
            { text: "$A[Left(i)] > A[Right(i)]$", isCorrect: false },
            { text: "Wysokość lewego i prawego poddrzewa jest równa.", isCorrect: false }
        ]
    },
    {
        id: 138,
        category: "Algorytmy Kopcowe",
        text: "Z jaką złożonością czasową działa procedura przywracania własności kopca w dół, czyli `Max-Heapify`?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 139,
        category: "Heapsort",
        text: "Czy algorytm Heapsort (Sortowanie przez kopcowanie) jest stabilny oraz czy sortuje w miejscu?",
        options: [
            { text: "Jest niestabilny.", isCorrect: true },
            { text: "Sortuje w miejscu (złożoność pamięciowa dodatkowa $O(1)$).", isCorrect: true },
            { text: "Jest stabilny.", isCorrect: false },
            { text: "Wymaga pamięci proporcjonalnej do $O(n)$.", isCorrect: false }
        ]
    },

    {
        id: 140,
        category: "Quicksort",
        text: "Jaki jest pesymistyczny czas działania algorytmu Quicksort i kiedy on najczęściej występuje (w wariancie bez randomizacji)?",
        options: [
            { text: "Wynosi $O(n^2)$ i występuje, gdy tablica jest już posortowana, a na pivot wybierany jest element skrajny.", isCorrect: true },
            { text: "Wynosi $O(n \\log n)$ dla każdego wejścia.", isCorrect: false },
            { text: "Wynosi $O(n^2)$ i występuje tylko wtedy, gdy wszystkie elementy w tablicy są unikalne.", isCorrect: false },
            { text: "Wynosi $O(n!)$, co wynika z drzewa decyzyjnego.", isCorrect: false }
        ]
    },
    {
        id: 141,
        category: "Sortowanie w czasie liniowym",
        text: "Co jest kluczowym warunkiem, aby użyć algorytmu Counting Sort (Sortowanie przez zliczanie)?",
        options: [
            { text: "Dane wejściowe muszą być liczbami całkowitymi z pewnego, z góry znanego i skończonego przedziału $[0, k]$.", isCorrect: true },
            { text: "Tablica musi posiadać rozkład jednostajny (równomierny).", isCorrect: false },
            { text: "Wszystkie elementy w tablicy muszą być mniejsze niż $n$.", isCorrect: false },
            { text: "Algorytm ten działa tylko na strukturach grafowych.", isCorrect: false }
        ]
    },
    {
        id: 142,
        category: "Sortowanie pozycyjne",
        text: "Jak działa algorytm Radix Sort?",
        options: [
            { text: "Sortuje dane iteracyjnie, najczęściej pozycjami od najmniej znaczącej cyfry (LSB) do najbardziej znaczącej (MSB).", isCorrect: true },
            { text: "Używa algorytmu 'dziel i zwyciężaj' by rozbić liczby na połówki bitowe.", isCorrect: false },
            { text: "Sortuje od najbardziej znaczącej cyfry w dół, używając kopca binarnego.", isCorrect: false },
            { text: "Jest to inna nazwa na Insertion Sort działający na literach.", isCorrect: false }
        ]
    },

    {
        id: 143,
        category: "Struktury Danych: Stos",
        text: "Z jakimi złożonościami czasowymi (w najlepszej implementacji) działają operacje PUSH oraz POP na stosie?",
        options: [
            { text: "Obie operacje wykonują się w czasie $O(1)$.", isCorrect: true },
            { text: "PUSH wykonuje się w $O(1)$, ale POP wymaga $O(n)$.", isCorrect: false },
            { text: "PUSH w $O(n)$, POP w $O(1)$.", isCorrect: false },
            { text: "Wymagają czasu logarytmicznego $O(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 144,
        category: "Struktury Danych: Kolejka",
        text: "Jaką strategię obsługi elementów realizuje struktura Kolejki (Queue)?",
        options: [
            { text: "FIFO (First In, First Out) - pierwszy na wejściu, pierwszy na wyjściu.", isCorrect: true },
            { text: "LIFO (Last In, First Out) - ostatni na wejściu, pierwszy na wyjściu.", isCorrect: false },
            { text: "Priority - elementy wychodzą wg wagi klucza.", isCorrect: false },
            { text: "Random - element zdejmuje się losowo.", isCorrect: false }
        ]
    },

    {
        id: 145,
        category: "Drzewa BST",
        text: "Z jaką operacją kojarzy się poszukiwanie minimalnego elementu w drzewie BST?",
        options: [
            { text: "Z podążaniem cały czas lewymi wskaźnikami od korzenia, aż napotkamy wartość NIL.", isCorrect: true },
            { text: "Z przejściem drzewa algorytmem BFS.", isCorrect: false },
            { text: "Z odczytem wskaźnika korzenia (ponieważ korzeń to zawsze minimum w BST).", isCorrect: false },
            { text: "Ze zsumowaniem wagi wszystkich liści.", isCorrect: false }
        ]
    },
    {
        id: 146,
        category: "Drzewa Czerwono-Czarne",
        text: "Która z poniższych zasad dotyczy bezpośrednio tzw. czarnej wysokości (black-height) w drzewach RB?",
        options: [
            { text: "Każda prosta ścieżka od ustalonego węzła do któregokolwiek z jego liści potomnych (NIL) zawiera dokładnie taką samą liczbę czarnych węzłów.", isCorrect: true },
            { text: "Czarna wysokość całego drzewa musi być równa liczbie węzłów czerwonych.", isCorrect: false },
            { text: "Każdy czerwony węzeł musi mieć czarną wysokość równą 0.", isCorrect: false },
            { text: "Zasada ta dotyczy jedynie drzew AVL, a nie drzew RB.", isCorrect: false }
        ]
    },

    {
        id: 147,
        category: "Tablice Haszujące",
        text: "Czym jest metoda łańcuchowa (chaining) w kontekście rozwiązywania kolizji?",
        options: [
            { text: "Techniką, w której wszystkie elementy przypisane przez funkcję haszującą do tego samego indeksu (slotu) są przechowywane na liście powiązanej pod tym indeksem.", isCorrect: true },
            { text: "Metodą, w której algorytm szuka kolejnej pustej komórki sąsiadującej w tablicy.", isCorrect: false },
            { text: "Rodzajem adresu MAC doczepianego do wartości klucza.", isCorrect: false },
            { text: "Zjawiskiem negatywnym polegającym na nieskończonym zapętleniu wskaźników.", isCorrect: false }
        ]
    },
    {
        id: 148,
        category: "Skip Lists",
        text: "Jakie jest główne przeznaczenie List Przeskakiwania (Skip Lists)?",
        options: [
            { text: "Stanowią probabilistyczną alternatywę dla zbalansowanych drzew BST, pozwalając na wstawianie, usuwanie i szukanie w oczekiwanym czasie $O(\\log n)$.", isCorrect: true },
            { text: "Służą do wyznaczania cykli w grafach nieskierowanych.", isCorrect: false },
            { text: "Pozwalają na stabilne sortowanie w czasie $O(n)$.", isCorrect: false },
            { text: "Wykorzystuje się je w adresowaniu otwartym tablic haszujących.", isCorrect: false }
        ]
    },

    {
        id: 149,
        category: "Statystyki Pozycyjne",
        text: "Co oznacza termin 'mediana' w ujęciu algorytmu znalezienia $i$-tej statystyki pozycyjnej dla zbioru $n$-elementowego?",
        options: [
            { text: "Jest to element, którego ranga (pozycja w posortowanym ciągu) wynosi $\\lfloor (n+1)/2 \\rfloor$ (mediana dolna) lub $\\lceil (n+1)/2 \\rceil$ (mediana górna).", isCorrect: true },
            { text: "Jest to różnica między maksymalnym a minimalnym elementem zbioru.", isCorrect: false },
            { text: "Jest to wartość, która występuje najczęściej w zbiorze (dominanta).", isCorrect: false },
            { text: "Jest to element wyznaczony przez korzeń każdego drzewa binarnego.", isCorrect: false }
        ]
    },
    {
        id: 150,
        category: "Drzewa Przedziałowe",
        text: "Kiedy mówimy, że dwa przedziały (interwały) $i$ oraz $i'$ się przecinają (nakładają)?",
        options: [
            { text: "Kiedy $i.low \\le i'.high$ oraz $i'.low \\le i.high$.", isCorrect: true },
            { text: "Tylko wtedy, gdy $i.low = i'.low$.", isCorrect: false },
            { text: "Kiedy pole `max` jednego z nich jest ujemne.", isCorrect: false },
            { text: "Gdy oba przedziały mają dokładnie tę samą długość.", isCorrect: false }
        ]
    },

    {
        id: 151,
        category: "Reprezentacja Grafów",
        text: "Która z metod reprezentacji grafu zajmuje pamięć rzędu $\\Theta(V^2)$ i jest idealna do sprawdzania w czasie stałym $O(1)$, czy pomiędzy danymi dwoma wierzchołkami istnieje krawędź?",
        options: [
            { text: "Macierz sąsiedztwa.", isCorrect: true },
            { text: "Lista sąsiedztwa.", isCorrect: false },
            { text: "Macierz incydencji.", isCorrect: false },
            { text: "Kopiec Fibonacciego.", isCorrect: false }
        ]
    },
    {
        id: 152,
        category: "Przeszukiwanie Wszerz (BFS)",
        text: "Jaką rolę pełni zabarwienie wierzchołków na CZARNO w algorytmie BFS?",
        options: [
            { text: "Oznacza, że wierzchołek został odwiedzony, zdjęty z kolejki i wszystkie jego bezpośrednie sąsiedztwa również zostały już przejrzane.", isCorrect: true },
            { text: "Oznacza węzły, które nie są osiągalne z punktu źródłowego.", isCorrect: false },
            { text: "Definiuje krawędzie wchodzące w skład najdłuższego cyklu.", isCorrect: false },
            { text: "Kolor czarny jest używany tylko w DFS, BFS używa wyłącznie flag True/False.", isCorrect: false }
        ]
    },
    {
        id: 153,
        category: "Skierowany Graf Acykliczny (DAG)",
        text: "Jaka relacja panuje w grafie DAG między krawędziami a algorytmem DFS?",
        options: [
            { text: "Graf skierowany jest DAG-iem (nie ma cykli) wtedy i tylko wtedy, gdy uruchomiony na nim algorytm DFS nie napotyka ani jednej krawędzi powrotnej (back edge).", isCorrect: true },
            { text: "W DAG-u każda krawędź sklasyfikowana przez DFS musi być krawędzią w przód.", isCorrect: false },
            { text: "DFS na DAG-u przetwarza wierzchołki zawsze w czasie $\\Theta(V^3)$.", isCorrect: false },
            { text: "DFS nie działa poprawnie na DAG-u z powodu braku korzenia.", isCorrect: false }
        ]
    },

    {
        id: 154,
        category: "Algorytm Prima",
        text: "W jaki sposób algorytm Prima znajduje Minimalne Drzewo Rozpinające (MST)?",
        options: [
            { text: "Wybiera dowolny wierzchołek startowy i w każdej iteracji, używając kolejki priorytetowej, zachłannie dołącza do budowanego drzewa wierzchołek połączony z nim najtańszą (najlżejszą) dostępną krawędzią.", isCorrect: true },
            { text: "Sortuje wszystkie krawędzie od najtańszej i dodaje je po kolei unikając cykli.", isCorrect: false },
            { text: "Wymusza relaksację wszystkich krawędzi tak samo jak Bellman-Ford.", isCorrect: false },
            { text: "Znajduje minimalny przepływ w sieci i wycina niepotrzebne ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 155,
        category: "Algorytm Dijkstry",
        text: "Dlaczego algorytm Dijkstry nie może być stosowany na grafach z ujemnymi wagami krawędzi?",
        options: [
            { text: "Ponieważ w momencie ściągania wierzchołka z kolejki priorytetowej algorytm uznaje, że odnalazł definitywnie najkrótszą drogę do niego; ujemna krawędź mogłaby to założenie później zepsuć.", isCorrect: true },
            { text: "Ponieważ kolejki priorytetowe z definicji nie potrafią przechowywać ujemnych kluczy.", isCorrect: false },
            { text: "Z powodu błędu dzielenia przez zero przy liczeniu wag.", isCorrect: false },
            { text: "Ponieważ algorytm działa na grafach nieskierowanych, a krawędzie ujemne istnieją tylko w grafach skierowanych.", isCorrect: false }
        ]
    },
    {
        id: 156,
        category: "Algorytm Bellmana-Forda",
        text: "Z jaką złożonością czasową działa algorytm Bellmana-Forda wyznaczający najkrótsze ścieżki z jednego źródła?",
        options: [
            { text: "$O(V \\cdot E)$", isCorrect: true },
            { text: "$O((V + E) \\log V)$", isCorrect: false },
            { text: "$O(V^3)$", isCorrect: false },
            { text: "$O(E \\log V)$", isCorrect: false }
        ]
    },
    {
        id: 157,
        category: "Algorytm Floyda-Warshalla",
        text: "Dla jakiego problemu projektowany jest algorytm Floyda-Warshalla?",
        options: [
            { text: "Dla poszukiwania najkrótszych ścieżek między każdą parą wierzchołków w grafie (All-Pairs Shortest Paths).", isCorrect: true },
            { text: "Dla wyznaczania drzewa MST w grafach dwudzielnych.", isCorrect: false },
            { text: "Wyłącznie dla problemu komiwojażera.", isCorrect: false },
            { text: "Dla sprawdzania spójności silnej grafów wielowymiarowych.", isCorrect: false }
        ]
    },
    {
        id: 158,
        category: "Koszt Zamortyzowany",
        text: "Jak definiowany jest 'koszt zamortyzowany' operacji na strukturze danych?",
        options: [
            { text: "Jako średni czas wykonania na operację wewnątrz najgorszego (pesymistycznego) długiego ciągu operacji.", isCorrect: true },
            { text: "Jako absolutny czas najdłuższej operacji w systemie pomnożony przez $N$.", isCorrect: false },
            { text: "Jako czas optymistyczny po podzieleniu przez stałą sprzętową.", isCorrect: false },
            { text: "To synonim czasowej złożoności w ujęciu $\\Omega(1)$.", isCorrect: false }
        ]
    },

    {
        id: 159,
        category: "Sieci Przepływowe",
        text: "Co oznacza termin 'przepustowość krawędzi' (capacity) $c(u,v)$ w sieci przepływowej?",
        options: [
            { text: "Określa ona maksymalną wartość przepływu (flow), jaka może zostać przesłana bezpośrednio z wierzchołka $u$ do $v$.", isCorrect: true },
            { text: "Oznacza minimalny przepływ wymagany, aby krawędź się nie załamała.", isCorrect: false },
            { text: "Suma wag na wszystkich ścieżkach do ujścia.", isCorrect: false },
            { text: "Odległość w kilometrach między węzłami.", isCorrect: false }
        ]
    },
    {
        id: 160,
        category: "Sieci Przepływowe: Przekrój",
        text: "W jaki sposób definiowana jest wartość przepływu całego grafu w oparciu o Twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Maksymalny możliwy przepływ jest równy przepustowości minimalnego przekroju (cięcia) w tej sieci.", isCorrect: true },
            { text: "Maksymalny przepływ jest równy sumie wag wszystkich krawędzi minus przepływy zwrotne.", isCorrect: false },
            { text: "Zależy wyłącznie od różnicy między źródłem a najmniejszym ujściem.", isCorrect: false },
            { text: "Jest równy pojemności najgrubszej pojedynczej rury w systemie.", isCorrect: false }
        ]
    },
    {
        id: 161,
        category: "Algorytmy Tekstowe: Naiwny",
        text: "Jaka jest pesymistyczna złożoność czasowa naiwnego algorytmu wyszukiwania wzorca o długości $m$ w tekście o długości $n$?",
        options: [
            { text: "$O((n - m + 1) \\cdot m)$, co w przybliżeniu daje $O(n \\cdot m)$.", isCorrect: true },
            { text: "$O(n + m)$", isCorrect: false },
            { text: "$O(n \\log m)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false }
        ]
    },
    {
        id: 162,
        category: "Algorytmy Tekstowe: KMP",
        text: "Co eliminuje algorytm Knutha-Morrisa-Pratta w porównaniu z algorytmem naiwnym?",
        options: [
            { text: "Eliminuje konieczność cofania wskaźnika w przeglądanym tekście; tekst jest przeglądany od lewej do prawej bez nawrotów.", isCorrect: true },
            { text: "Eliminuje użycie tablic poprzez haszowanie.", isCorrect: false },
            { text: "Eliminuje potrzebę znania wzorca przed wykonaniem kodu.", isCorrect: false },
            { text: "Omija problem wielkich i małych liter dzięki bitowym shiftom.", isCorrect: false }
        ]
    },

    {
        id: 163,
        category: "Kompresja: Huffman",
        text: "Jakie struktury kodów generuje algorytm kodowania Huffmana?",
        options: [
            { text: "Kody prefiksowe (ang. prefix codes), w których żadne słowo kodowe nie jest przedrostkiem innego, co pozwala na bezbłędne dekodowanie.", isCorrect: true },
            { text: "Kody o stałej długości (stałoblokowe).", isCorrect: false },
            { text: "Słownikowe ciągi rosnące w LZW.", isCorrect: false },
            { text: "Kody ułamkowe dla formatu JPEG.", isCorrect: false }
        ]
    },
    {
        id: 164,
        category: "Drzewa AVL",
        text: "Kiedy dochodzi do przypadku LL (Left-Left) podczas analizy balansu w drzewie AVL?",
        options: [
            { text: "Gdy lewe poddrzewo danego węzła jest wyższe od prawego o 2 (BF = 2), a nowo wstawiony element trafił do lewego poddrzewa jego lewego dziecka.", isCorrect: true },
            { text: "Gdy nowo wstawiony węzeł jest liściem i ma parzystą wartość klucza.", isCorrect: false },
            { text: "Gdy drzewo posiada tylko lewe gałęzie, niezależnie od wysokości.", isCorrect: false },
            { text: "Gdy korzeń i lewe dziecko mają czarny kolor w reprezentacji mapowanej na RB.", isCorrect: false }
        ]
    },
    {
        id: 165,
        category: "Kopce",
        text: "Ile czasu zajmuje odczytanie największej wartości z kolejki priorytetowej opartej na Max-Heap (bez jej usuwania)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 166,
        category: "Wprowadzenie",
        text: "Co oznacza efektywność (złożoność) czasowa algorytmu rzędu $\\Theta(n)$?",
        options: [
            { text: "Czas wykonania algorytmu rośnie proporcjonalnie do wielkości danych wejściowych $n$ (z dokładnością do stałych).", isCorrect: true },
            { text: "Algorytm musi wykonać dokładnie $n$ operacji niezależnie od kodu.", isCorrect: false },
            { text: "Czas wykonania algorytmu jest zawsze stały.", isCorrect: false },
            { text: "Algorytm działa tylko dla $n$ mniejszego niż 1000.", isCorrect: false }
        ]
    },

    {
        id: 167,
        category: "Złożoność i Notacje Asymptotyczne",
        text: "Które z poniższych definicji poprawnie opisują notacje asymptotyczne?",
        options: [
            { text: "$O(g(n))$ określa asymptotyczne ograniczenie górne (czas pesymistyczny).", isCorrect: true },
            { text: "$\\Omega(g(n))$ określa asymptotyczne ograniczenie dolne (czas optymistyczny).", isCorrect: true },
            { text: "$\\Theta(g(n))$ oznacza, że funkcja rośnie dokładnie w tempie $g(n)$, będąc jednocześnie ograniczoną z góry i z dołu.", isCorrect: true },
            { text: "$O(g(n))$ zawsze oznacza czas średni wykonania algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 168,
        category: "Wprowadzenie: Dowód indukcyjny",
        text: "Z jakich elementów składa się poprawny dowód niezmiennika pętli (loop invariant)?",
        options: [
            { text: "Inicjalizacja: niezmiennik jest prawdziwy przed pierwszą iteracją pętli.", isCorrect: true },
            { text: "Utrzymanie: jeśli niezmiennik jest prawdziwy przed iteracją, to pozostaje prawdziwy przed kolejną.", isCorrect: true },
            { text: "Zakończenie: po zakończeniu pętli niezmiennik daje użyteczną właściwość pomagającą udowodnić poprawność algorytmu.", isCorrect: true },
            { text: "Relaksacja: udowodnienie, że pętla zawsze zmniejsza koszt o $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 169,
        category: "Algorytmy Sortowania: Wstawianie i Scalanie",
        text: "Które z poniższych twierdzeń o Sortowaniu przez Wstawianie (Insertion Sort) i Scalanie (Merge Sort) są prawdziwe?",
        options: [
            { text: "Insertion Sort działa w czasie optymistycznym $\\Omega(n)$ dla tablic już posortowanych.", isCorrect: true },
            { text: "Merge Sort działa w czasie $\\Theta(n \\log n)$ niezależnie od początkowego uporządkowania danych.", isCorrect: true },
            { text: "Oba algorytmy są stabilne.", isCorrect: true },
            { text: "Oba algorytmy sortują w miejscu (dodatkowa pamięć $O(1)$).", isCorrect: false }
        ]
    },
    {
        id: 170,
        category: "Struktury Danych: Kopce",
        text: "Które własności definiują poprawny kopiec binarny typu Max (Max-Heap)?",
        options: [
            { text: "Drzewo jest prawie pełnym drzewem binarnym wypełnianym od lewej do prawej.", isCorrect: true },
            { text: "Dla każdego węzła $i$ (poza korzeniem) zachodzi $A[Parent(i)] \\ge A[i]$.", isCorrect: true },
            { text: "Lewe dziecko musi być zawsze większe od prawego dziecka.", isCorrect: false },
            { text: "Wysokość kopca zbudowanego z $n$ elementów wynosi $\\Theta(\\log n)$.", isCorrect: true }
        ]
    },
    {
        id: 171,
        category: "Struktury Danych: Liniowe",
        text: "Jakie właściwości i czasy operacji charakteryzują strukturę Stosu (Stack) i Kolejki (Queue)?",
        options: [
            { text: "Stos realizuje strategię LIFO (Last In, First Out).", isCorrect: true },
            { text: "Kolejka realizuje strategię FIFO (First In, First Out).", isCorrect: true },
            { text: "Operacje Push i Pop na stosie można zaimplementować w czasie $O(1)$.", isCorrect: true },
            { text: "Kolejka wymaga czasu $O(n)$ do zdjęcia elementu (Dequeue).", isCorrect: false }
        ]
    },
    {
        id: 172,
        category: "Algorytmy Sortowania: Quicksort",
        text: "Co charakteryzuje algorytm Quicksort według przedstawionych na wykładzie pseudokodów?",
        options: [
            { text: "Opiera się na strategii \"Dziel i zwyciężaj\".", isCorrect: true },
            { text: "Sortuje tablicę w miejscu.", isCorrect: true },
            { text: "Jest algorytm stabilnym w wersji Lomuto.", isCorrect: false },
            { text: "W najgorszym przypadku działa w czasie $\\Theta(n^2)$.", isCorrect: true }
        ]
    },
    {
        id: 173,
        category: "Drzewa BST i RB",
        text: "Które operacje w zbalansowanym drzewie Czerwono-Czarnym (RB) wykonują się w czasie pesymistycznym $O(\\log n)$?",
        options: [
            { text: "Wyszukiwanie elementu (Search).", isCorrect: true },
            { text: "Znalezienie następnika (Successor).", isCorrect: true },
            { text: "Wstawienie elementu (Insert).", isCorrect: true },
            { text: "Usunięcie elementu (Delete).", isCorrect: true }
        ]
    },
    {
        id: 174,
        category: "Tablice Haszujące",
        text: "Które metody są poprawnymi technikami rozwiązywania kolizji w tablicach haszujących?",
        options: [
            { text: "Metoda łańcuchowa (Chaining) przy użyciu list wiązanych.", isCorrect: true },
            { text: "Adresowanie otwarte - liniowe (Linear Probing).", isCorrect: true },
            { text: "Adresowanie otwarte - kwadratowe (Quadratic Probing).", isCorrect: true },
            { text: "Adresowanie bezpośrednie (Direct Addressing).", isCorrect: false }
        ]
    },
    {
        id: 175,
        category: "Algorytmy Grafowe: BFS i DFS",
        text: "Które z poniższych twierdzeń o przeszukiwaniu grafów G(V, E) są prawdziwe?",
        options: [
            { text: "BFS znajduje najkrótsze ścieżki (pod względem liczby krawędzi) z wierzchołka źródłowego.", isCorrect: true },
            { text: "DFS wykorzystuje strukturę kolejki (Queue) do zarządzania odwiedzanymi wierzchołkami.", isCorrect: false },
            { text: "Złożoność czasowa dla reprezentacji listą sąsiedztwa w obu przypadkach wynosi $\\Theta(V + E)$.", isCorrect: true },
            { text: "Sortowanie topologiczne to w praktyce posortowanie wierzchołków względem malejącego czasu wyjścia z algorytmu DFS.", isCorrect: true }
        ]
    },
    {
        id: 176,
        category: "Algorytmy Grafowe: MST",
        text: "Co jest prawdą na temat Minimalnych Drzew Rozpinających (MST) i algorytmów je wyznaczających?",
        options: [
            { text: "Algorytm Kruskala wymaga początkowego posortowania wszystkich krawędzi względem ich wag.", isCorrect: true },
            { text: "Algorytm Prima rozbudowuje jedno połączone drzewo wychodząc z węzła startowego.", isCorrect: true },
            { text: "Drzewo rozpinające dla grafu o $V$ wierzchołkach zawsze zawiera dokładnie $V-1$ krawędzi.", isCorrect: true },
            { text: "Oba algorytmy (Kruskala i Prima) nie radzą sobie z krawędziami o wagach ujemnych.", isCorrect: false }
        ]
    },
    {
        id: 177,
        category: "Algorytmy Grafowe: Najkrótsze Ścieżki",
        text: "Wskaż poprawne zastosowania i cechy algorytmów najkrótszych ścieżek z jednego źródła.",
        options: [
            { text: "Algorytm Dijkstry wymaga krawędzi o wagach nieujemnych.", isCorrect: true },
            { text: "Algorytm Bellmana-Forda potrafi wykryć cykle o ujemnej wadze, z których można osiągnąć cel.", isCorrect: true },
            { text: "W grafach DAG (skierowanych bez cykli) można wyznaczyć najkrótsze ścieżki w czasie $O(V+E)$ dzięki sortowaniu topologicznemu.", isCorrect: true },
            { text: "Algorytm Dijkstry bezwzględnie wymaga struktury kopca Fibonacciego do działania.", isCorrect: false }
        ]
    },
    {
        id: 178,
        category: "Analiza Zamortyzowana",
        text: "W jakich technikach analizy zamortyzowanej przypisuje się niektórym operacjom sztuczne ładunki kosztów (kredyty) w celu pokrycia drogich operacji w przyszłości?",
        options: [
            { text: "W metodzie księgowania (Accounting Method).", isCorrect: true },
            { text: "W metodzie potencjału (Potential Method).", isCorrect: true },
            { text: "W metodzie kosztu sumarycznego (Aggregate Method).", isCorrect: false },
            { text: "W analizie algorytmów równoległych PRAM.", isCorrect: false }
        ]
    },
    {
        id: 179,
        category: "Sieci Przepływowe",
        text: "Które z pojęć wiążą się bezpośrednio z sieciami przepływowymi i algorytmem Forda-Fulkersona?",
        options: [
            { text: "Sieć residualna (Residual Network).", isCorrect: true },
            { text: "Ścieżka powiększająca (Augmenting Path).", isCorrect: true },
            { text: "Minimalny przekrój (Minimum Cut).", isCorrect: true },
            { text: "Drzewo statystyk pozycyjnych (OS-Tree).", isCorrect: false }
        ]
    },
    {
        id: 180,
        category: "Algorytmy Tekstowe",
        text: "Które algorytmy wyszukiwania wzorca w tekście opierają się na wcześniejszym przetwarzaniu wzorca (preprocessing)?",
        options: [
            { text: "Algorytm KMP (Knuth-Morris-Pratt).", isCorrect: true },
            { text: "Algorytm Boyera-Moore'a.", isCorrect: true },
            { text: "Algorytm automatów skończenie stanowych (FSA).", isCorrect: true },
            { text: "Naiwny algorytm wyszukiwania.", isCorrect: false }
        ]
    },
    {
        id: 181,
        category: "Kompresja",
        text: "Które właściwości opisują algorytm kodowania Huffmana?",
        options: [
            { text: "Generuje kody o zmiennej długości (variable-length codes).", isCorrect: true },
            { text: "Tworzy kody prefiksowe (żaden kod nie jest początkiem innego kodu).", isCorrect: true },
            { text: "Wykorzystuje kolejkę priorytetową (Min-Heap) do łączenia najrzadszych węzłów.", isCorrect: true },
            { text: "Jest to kompresja stratna, tracąca detale na rzecz rozmiaru.", isCorrect: false }
        ]
    },
    {
        id: 182,
        category: "Algorytmy Równoległe",
        text: "Zgodnie z taksonomią Flynna, co reprezentuje model MIMD?",
        options: [
            { text: "Wiele strumieni instrukcji i wiele strumieni danych (Multiple Instruction, Multiple Data).", isCorrect: true },
            { text: "Są to zazwyczaj współczesne wielordzeniowe procesory asynchroniczne.", isCorrect: true },
            { text: "Jeden strumień instrukcji na wektorze danych (karty graficzne GPU).", isCorrect: false },
            { text: "Strumień o pojedynczej instrukcji z wieloma odczytami.", isCorrect: false }
        ]
    },
    {
        id: 183,
        category: "Statystyki Pozycyjne",
        text: "Algorytm \"Magicznych Piątek\" służy do:",
        options: [
            { text: "Znalezienia $i$-tej statystyki pozycyjnej w gwarantowanym (pesymistycznym) czasie liniowym $O(n)$.", isCorrect: true },
            { text: "Deterministycznego doboru dobrego elementu osiowego (pivota) dzielącego zbiór w zrównoważonych proporcjach.", isCorrect: true },
            { text: "Kompresji danych z alfabetu pięcioliterowego.", isCorrect: false },
            { text: "Szybkiego wyznaczenia rangi w drzewie OS.", isCorrect: false }
        ]
    },
    {
        id: 184,
        category: "Drzewa Przedziałowe",
        text: "Jakie operacje wspierają dynamiczne drzewa przedziałowe (Interval Trees) oparte o drzewa RB?",
        options: [
            { text: "Wstawienie przedziału w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Usunięcie przedziału w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Poszukiwanie przedziału nakładającego się z zapytaniem w czasie $O(\\log n)$.", isCorrect: true },
            { text: "Znajdowanie wszystkich przecięć odcinków na płaszczyźnie 2D w czasie stałym.", isCorrect: false }
        ]
    },
    {
        id: 185,
        category: "Sortowanie Liniowe",
        text: "Co ogranicza algorytmy sortowania w czasie liniowym (Counting Sort, Radix Sort, Bucket Sort)?",
        options: [
            { text: "Nie wykonują one bezpośrednich porównań (np. operatora < lub >) między wartościami elementów w celu wyznaczenia porządku.", isCorrect: true },
            { text: "Counting sort wymaga asympotycznie dużej pamięci, jeśli zakres danych $k$ jest ogromny.", isCorrect: true },
            { text: "Bucket sort wymaga, by wejściowe liczby pochodziły z rozkładu jednostajnego na pewnym przedziale.", isCorrect: true },
            { text: "Wszystkie muszą operować na liczbach zmiennoprzecinkowych.", isCorrect: false }
        ]
    },
    {
        id: 186,
        category: "Złożoność Obliczeniowa",
        text: "Rozważ algorytm, który składa się z 3 zagnieżdżonych pętli 'for' od 1 do $n$. W najgłębszej pętli wykonuje operację w czasie $O(\\log n)$. Jaka jest asymptotyczna złożoność algorytmu?",
        options: [
            { text: "$\\Theta(n^3 \\log n)$", isCorrect: true },
            { text: "$\\Theta(n \\log^3 n)$", isCorrect: false },
            { text: "$\\Theta(n^3)$", isCorrect: false },
            { text: "$\\Theta(n^4)$", isCorrect: false }
        ]
    },
    {
        id: 187,
        category: "Drzewa BST",
        text: "Z jakich operacji składa się zarys procedury usuwania węzła mającego dwoje dzieci z drzewa BST?",
        options: [
            { text: "Odszukanie następnika usuwanego węzła (minimum w jego prawym poddrzewie).", isCorrect: true },
            { text: "Skopiowanie klucza z następnika do usuwanego węzła.", isCorrect: true },
            { text: "Usunięcie następnika z jego pierwotnej pozycji.", isCorrect: true },
            { text: "Przesunięcie korzenia całego drzewa na miejsce usuwanego elementu.", isCorrect: false }
        ]
    },
    {
        id: 188,
        category: "Listy Przeskakiwania",
        text: "Które zdania rzetelnie opisują strukturę Skip List (Listy z przeskokami)?",
        options: [
            { text: "Elementy w liście przeskakiwania zawsze pozostają posortowane na poziomie najniższym (bazowym).", isCorrect: true },
            { text: "Każdy węzeł posiada losowo wyznaczoną wysokość (liczbę wskaźników do przodu).", isCorrect: true },
            { text: "Złożoność pamięciowa Skip Listy wynosi oczekiwane $O(n)$.", isCorrect: true },
            { text: "Skip Lista używa krawędzi powrotnych do optymalizacji szukania w tył.", isCorrect: false }
        ]
    },
    {
        id: 189,
        category: "Tablice Haszujące",
        text: "Co jest prawdą na temat haszowania przez mnożenie?",
        options: [
            { text: "Wzór to $h(k) = \\lfloor m (k \\cdot A \\bmod 1) \\rfloor$.", isCorrect: true },
            { text: "Wartość $A$ musi być stałą z przedziału $(0, 1)$.", isCorrect: true },
            { text: "Zaletą metody mnożenia jest to, że rozmiar tablicy $m$ nie musi być liczbą pierwszą.", isCorrect: true },
            { text: "Metoda ta w ogóle nie generuje kolizji.", isCorrect: false }
        ]
    },
    {
        id: 190,
        category: "Algorytmy Grafowe",
        text: "W jakiej formie matematycznej można przedstawić graf do analizy algorytmicznej?",
        options: [
            { text: "Macierz sąsiedztwa (Adjacency Matrix).", isCorrect: true },
            { text: "Listy sąsiedztwa (Adjacency Lists).", isCorrect: true },
            { text: "Zbiór wierzchołków $V$ i krawędzi $E$ jako $G=(V, E)$.", isCorrect: true },
            { text: "Jako funkcję $T(n) = aT(n/b) + f(n)$.", isCorrect: false }
        ]
    },
    {
        id: 191,
        category: "Algorytmy Grafowe: Krawędzie",
        text: "Zgodnie z klasyfikacją DFS, które rodzaje krawędzi tworzą cykl w grafie skierowanym?",
        options: [
            { text: "Krawędzie powrotne (Back edges).", isCorrect: true },
            { text: "Krawędzie poprzeczne (Cross edges).", isCorrect: false },
            { text: "Krawędzie w przód (Forward edges).", isCorrect: false },
            { text: "Krawędzie drzewowe (Tree edges).", isCorrect: false }
        ]
    },
    {
        id: 192,
        category: "Najkrótsze ścieżki",
        text: "Który algorytm używa struktury d-kopca (lub kopca binarnego/Fibonacciego) jako trzonu optymalizacyjnego?",
        options: [
            { text: "Algorytm Dijkstry.", isCorrect: true },
            { text: "Algorytm Prima.", isCorrect: true },
            { text: "Algorytm Bellmana-Forda.", isCorrect: false },
            { text: "Algorytm Floyda-Warshalla.", isCorrect: false }
        ]
    },
    {
        id: 193,
        category: "Najkrótsze ścieżki",
        text: "Co oznacza operacja 'Relaksacji' krawędzi $(u, v)$ z wagą $w$?",
        options: [
            { text: "Sprawdzenie, czy szacowana odległość do $v$ jest większa od odległości do $u$ powiększonej o wagę krawędzi $(u,v)$.", isCorrect: true },
            { text: "Jeżeli test relaksacji przechodzi pomyślnie, to uaktualnienie odległości $d[v] = d[u] + w(u,v)$ i ustalenie $u$ jako poprzednika $v$.", isCorrect: true },
            { text: "Operacja ma na celu usunięcie cykli z grafu.", isCorrect: false },
            { text: "Zawsze modyfikuje wagę krawędzi na zero.", isCorrect: false }
        ]
    },
    {
        id: 194,
        category: "Złożoność: O(1) Amortyzowane",
        text: "Które z podanych struktur wykonują podane operacje w średnim czasie amortyzowanym $O(1)$?",
        options: [
            { text: "Wstawienie (Push/Append) elementu na koniec tablicy dynamicznej podwajającej rozmiar.", isCorrect: true },
            { text: "Operacje na strukturze zbiorów rozłącznych z kompresją ścieżki i heurystyką rangi (ścisłe zbliżenie do $O(1)$ przy założeniu $O(\\alpha(n))$).", isCorrect: true },
            { text: "Multipop na stosie.", isCorrect: true },
            { text: "Znalezienie elementu z najmniejszym kluczem w drzewie BST.", isCorrect: false }
        ]
    },
    {
        id: 195,
        category: "Sieci Przepływowe",
        text: "W sieci residualnej $G_f$ w algorytmie Forda-Fulkersona przepustowość krawędzi powrotnej $c_f(v, u)$ dla krawędzi grafu $(u, v)$ wynosi:",
        options: [
            { text: "Zawsze dokładnie tyle, ile przepływu zostało posłane krawędzią $(u,v)$, tzn. $f(u,v)$.", isCorrect: true },
            { text: "Zawsze $0$.", isCorrect: false },
            { text: "$c(u, v) - f(u, v)$.", isCorrect: false },
            { text: "Dokładnie tyle co pojemność $c(u, v)$.", isCorrect: false }
        ]
    },
    {
        id: 196,
        category: "Algorytmy Tekstowe",
        text: "Który algorytm opiera się na sumie algebraicznej (haszu) okna ślizgającego się po tekście?",
        options: [
            { text: "Algorytm Rabina-Karpa.", isCorrect: true },
            { text: "Algorytm Knutha-Morrisa-Pratta.", isCorrect: false },
            { text: "Algorytm Boyera-Moore'a.", isCorrect: false },
            { text: "Kodowanie LZW.", isCorrect: false }
        ]
    },
    {
        id: 197,
        category: "Kompresja Danych",
        text: "W drzewie kodowania Huffmana, na czym polega metoda zachłanna wyboru?",
        options: [
            { text: "W każdym kroku z kolejki wyciągane są dwa węzły o najmniejszej częstości występowania i tworzony jest z nich nowy węzeł wewnętrzny.", isCorrect: true },
            { text: "W każdym kroku sortujemy krawędzie od najcięższej do najlżejszej.", isCorrect: false },
            { text: "Zawsze po lewej stronie umieszcza się samogłoski.", isCorrect: false },
            { text: "Wykorzystuje rotacje po zaalokowaniu nowego symbolu.", isCorrect: false }
        ]
    },
    {
        id: 198,
        category: "Wprowadzenie do algorytmów",
        text: "Co oznacza, że algorytm sortowania wykonuje się w miejscu (in-place)?",
        options: [
            { text: "Wymaga co najwyżej stałej $\\Theta(1)$ pamięci dodatkowej (poza tablicą wejściową), ewentualnie $O(\\log n)$ na stos wywołań w wariancie Quicksort.", isCorrect: true },
            { text: "Wykonuje się w dokładnie jednym określonym węźle procesora.", isCorrect: false },
            { text: "Gwarantuje ten sam stan elementów dublujących po posortowaniu.", isCorrect: false },
            { text: "Nie wykonuje żadnej instrukcji swap.", isCorrect: false }
        ]
    },
    {
        id: 199,
        category: "Sortowanie Kopcowe",
        text: "Jaki węzeł jest rodzicem dla węzła o indeksie 7 w reprezentacji tablicowej kopca (indeksowanej od 1)?",
        options: [
            { text: "Węzeł o indeksie 3.", isCorrect: true },
            { text: "Węzeł o indeksie 2.", isCorrect: false },
            { text: "Węzeł o indeksie 4.", isCorrect: false },
            { text: "Węzeł o indeksie 6.", isCorrect: false }
        ]
    },
    {
        id: 200,
        category: "Zbiory Dynamiczne",
        text: "Jakie są podstawowe operacje w dynamicznym zbiorze (słowniku)?",
        options: [
            { text: "Wyszukiwanie (Search).", isCorrect: true },
            { text: "Wstawianie (Insert).", isCorrect: true },
            { text: "Usuwanie (Delete).", isCorrect: true },
            { text: "Rotacja Lewostronna (Rotate-Left).", isCorrect: false }
        ]
    },
    {
        id: 201,
        category: "Grafy: Reprezentacje",
        text: "Gdzie preferuje się użycie list sąsiedztwa nad macierzą sąsiedztwa w algorytmice?",
        options: [
            { text: "W grafach rzadkich (gdzie $|E| \\ll |V|^2$), ponieważ ich pamięć operacyjna to $\\Theta(V+E)$ zamiast $\\Theta(V^2)$.", isCorrect: true },
            { text: "W algorytmach wymagających iterowania po wszystkich sąsiadach danego węzła.", isCorrect: true },
            { text: "Tam, gdzie wymagane jest błyskawiczne ($O(1)$) zapytanie, czy konkretna krawędź $(u,v)$ istnieje.", isCorrect: false },
            { text: "W algorytmie Floyda-Warshalla wyliczającym wszystkie ścieżki.", isCorrect: false }
        ]
    },
    {
        id: 202,
        category: "Pseudokod: Quicksort",
        text: "W klasycznej wersji Quicksort (na podziale Lomuto z ostatnim elementem jako pivot), jakie są wartości indeksów dla wywołań rekurencyjnych, jeżeli punkt podziału zwrócił wartość $q$?",
        options: [
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q + 1, r)`", isCorrect: true },
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q + 1, r)`", isCorrect: false },
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q, r)`", isCorrect: false },
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q, r)`", isCorrect: false }
        ]
    },
    {
        id: 203,
        category: "Pseudokod: Quicksort (Hoare)",
        text: "Jeśli jako mechanizmu partycjonującego w Quicksort użyjemy pseudokodu Hoare'a, to wywołania rekurencyjne muszą wyglądać inaczej. Jak?",
        options: [
            { text: "`Quicksort(A, p, q)` oraz `Quicksort(A, q + 1, r)`", isCorrect: true },
            { text: "Procedura Hoare'a nie daje pewności, że element $q$ jest już na stałym miejscu, a dzieli zbiór na strefę elementów $\\le$ od pivota i $\\ge$ od pivota.", isCorrect: true },
            { text: "`Quicksort(A, p, q - 1)` oraz `Quicksort(A, q + 1, r)` tak samo jak w Lomuto.", isCorrect: false },
            { text: "Procedura Hoare zwraca zawsze wartość $r$ z podtablicy.", isCorrect: false }
        ]
    },
    {
        id: 204,
        category: "Pseudokod: Merge Sort",
        text: "Co charakteryzuje instrukcję `mid = floor((left + right) / 2)` w pseudokodzie sortowania przez scalanie (Merge Sort)?",
        options: [
            { text: "Rozdziela tablicę w gwarantowany sposób symetryczny, by zredukować wysokość wywołań do $\\log_2 n$.", isCorrect: true },
            { text: "Zabezpiecza podział z uniknięciem pętli nieskończonej przez operację funkcji podłogi (floor).", isCorrect: true },
            { text: "Wylicza medianę z elementów w tablicy tak jak w algorytmie Quickselect.", isCorrect: false },
            { text: "Może przekroczyć zakres tablicy dla typów ujemnych.", isCorrect: false }
        ]
    },
    {
        id: 205,
        category: "Kopce: Build-Heap",
        text: "Jaki jest precyzyjnie rozpisany powód z sumarycznego kosztu amortyzacji, że `Build-Heap` wykonuje się w zaledwie $O(n)$?",
        options: [
            { text: "Koszt procedury `Heapify` rośnie wraz z odległością w dół od liści. Liści jest bardzo dużo (około $n/2$) i naprawa ich zajmuje czas 0. Rodziców liści (poziom 1) jest $n/4$ i ich naprawa zajmuje 1 krok, rodziców na poziomie 2 jest $n/8$ a ich czas to 2 itd. Zbieżny szereg geometryczny sum tych nakładów $\\sum \\frac{h}{2^h}$ ustala się z wynikiem granicznym dla $O(n)$.", isCorrect: true },
            { text: "Build-Heap ignoruje w ogóle liście i wykonuje tylko obrót dwóch węzłów szczytowych.", isCorrect: false },
            { text: "Dzieje się tak, ponieważ wykorzystywane jest haszowanie zamiast swap.", isCorrect: false },
            { text: "W najgorszym scenariuszu wykonuje $n \\log n$ operacji, ale statystycznie zawsze mniej, dając $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 206,
        category: "Kolejki Priorytetowe: Extract-Max",
        text: "Kiedy wykonamy operację `Heap-Extract-Max` z poprawnie zbudowanego kopca, który element z tablicy $A$ zostaje fizycznie skopiowany do indeksu korzenia ($A[1]$) przez algorytm i z jakiego powodu?",
        options: [
            { text: "Kopiowany jest element z ostatniego używanego miejsca tablicy (`A[A.heapsize]`), ponieważ musimy zachować ciągłość bloków i skrócić rozmiar kopca o 1, a ten element jest jedynym liściem bezpiecznym do przemieszczenia i ponownego \"zanurzenia\" z `Max-Heapify` w dół.", isCorrect: true },
            { text: "W lewe miejsce korzenia wstawiany jest prawy potomek dla rotacji zbalansowanej.", isCorrect: false },
            { text: "Korzeń nadpisywany jest elementem mniejszym tylko z gałęzi posiadającej maksymalne z obu jego dzieci.", isCorrect: false },
            { text: "Korzeń jest po prostu fizycznie oznaczany flagą `NIL` i zrzucany.", isCorrect: false }
        ]
    },
    {
        id: 207,
        category: "Listy Przeskakiwania: Skip Lists",
        text: "Pseudokod operacji wyszukiwania na liście Skip-List (Search) w głównej pętli schodzi od poziomu najwyższego `list.level` w dół do poziomu 1. Co następuje w pętli wewnątrz dla danego poziomu $i$?",
        options: [
            { text: "Program przechodzi poziomo wzdłuż poziomu do przodu `while (x.forward[i].key < key)` wykorzystując fakt bycia przeskoczonym, skracając dystans bez schodzenia jeszcze do dołu.", isCorrect: true },
            { text: "Węzeł zostaje uwięziony i odrzuca wynik gdy tylko natrafi na wskaźnik zwrotny.", isCorrect: false },
            { text: "Losuje i odpytuje kostkę matematyczną dla zweryfikowania wysokości z poziomu logarytmu.", isCorrect: false },
            { text: "Z każdym taktem pętla zmienia funkcję na `x = x.prev`.", isCorrect: false }
        ]
    },
    {
        id: 208,
        category: "Haszowanie Otwarte: Pseudokod Delete",
        text: "Dla poprawnego funkcjonowania operacji `HASH-DELETE` i braku unieruchamiania pętli dla szukanej ścieżki (Search) za użyciem skrótów, w algorytmach rozwiązanych poprzez Adresowanie Otwarte element z tablicy usunięty jest jak?",
        options: [
            { text: "Miejsce zajęte przez dany klucz ustala się do specjalnej wirtualnej wartości stałej w pamięci `DELETED` - na tej podstawie pętla wyszukiwawcza wie by ominąć te miejsce z powrotem odczytując hash dalej.", isCorrect: true },
            { text: "Procedura nadpisuje go standardowym atrybutem `NIL`, ponieważ komórki wolne zawsze kończą szukanie dla wektora równego w kluczu.", isCorrect: false },
            { text: "Element kasuje i zmniejsza tablicę realokując ją ponownie.", isCorrect: false },
            { text: "Nie wspierają one wcale procedury Delete przez ryzyko tzw. Kolizji Obwiedniej.", isCorrect: false }
        ]
    },
    {
        id: 209,
        category: "Statystyki Pozycyjne: Randomized Select",
        text: "W jaki sposób procedura podziału i sprawdzenia (`Randomized-Select(A, p, r, i)`) oszacowuje i określa rekurencyjnie pozycję sprawdzanego i szukanego przedziału `$i$-tego elementu` w ujętej podtablicy?",
        options: [
            { text: "Wylicza z użyciem operatora $k = q - p + 1$ naturalny offset wektora pivota względem startu lewego indeksu p. Jeśli $i == k$ to odnaleźliśmy element; a jeśli offset $i < k$ szukamy w przedziale na połówce z dołu i przeciwnie na połówce w górę.", isCorrect: true },
            { text: "Dzieli on elementy przy wykorzystaniu wskaźników z Heapify.", isCorrect: false },
            { text: "Zależność $i$ wyznaczana jest losowo przy każdej wywołanej gałęzi rekurencji.", isCorrect: false },
            { text: "Porównuje wielkość wejściową podtablic z użyciem algorytmu Radix.", isCorrect: false }
        ]
    },
    {
        id: 210,
        category: "Grafy Reprezentacja: DFS",
        text: "W jaki formalny sposób odbywa się określenie znacznika ukończenia dla algorytmu `DFS-Visit(u)` nadzorującego czasy $d[u]$ oraz $f[u]$ i zmieniający kolory dla grafów wejściowych w Cormenie?",
        options: [
            { text: "Znacznik i flaga czasowa ukończenia wejścia nakładana jest na końcu metody; zmieniona ze znacznika czasowego do tablicy $f[u]$ tuż przed przekolorowaniem go po ostatecznych odwiedzinach i zmazaniu wszystkich podgałęzi na status $BLACK$ w celu finalnego domknięcia drogi w drzewie DFS.", isCorrect: true },
            { text: "Procedura $d[u]$ zastępuje i oznacza wierzchołek od wejścia u góry kolorem Czerwonym i zamyka jego drogi.", isCorrect: false },
            { text: "W procedurze znajduje się wymóg do oznaczeń tylko powrotnych Back-edges pomijając wpis na koniec z pętlą stałych.", isCorrect: false },
            { text: "Algorytm zapisuje i nadpisuje wartość nieskończoności dla wierzchołka $u$ podczas pętli szukania wektorów na wprost by zamienić flagę.", isCorrect: false }
        ]
    },
    {
        id: 211,
        category: "Grafy: Kruskal na Union-Find",
        text: "Co wynika i staje się w ciele metody operacyjnej Kruskala w chwili gdy zbiór dwóch końców dla testowanej drogi z rzutu najmniejszych kosztów na Find-Set ujawni zgodność wejść na równy indeks (`Find-Set(u) == Find-Set(v)`)?",
        options: [
            { text: "Pętla omija krawędź bez żadnych modyfikacji i zmian, zapobiegając ujęciu i wprowadzeniu w domykający drzewo MST destruktywny ujemny obieg i zamykający element - cykl.", isCorrect: true },
            { text: "Wymusza na krawędziach relaksację z przypisaniem nowych ujemnych wag by cofnąć się na połówki do przodu.", isCorrect: false },
            { text: "Cofana jest zmienna w pętli bez powrotu co przelicza rzuty Kruskala.", isCorrect: false },
            { text: "W tym momencie usuwa węzeł dla zmniejszenia skali lasu dla struktury MST.", isCorrect: false }
        ]
    },
    {
        id: 212,
        category: "Grafy: Warshall-Floyd",
        text: "Zapis potrójnej iteracyjnej tablicy z użyciem mechaniki dynamicznej dla programu algorytmu Floyda-Warshalla wyłuskuje uwarunkowanie wyliczeń dróg pośrednich za każdym razem dla trasy na skrótach w indeksie `k`. Jak wygląda wewnętrzna pętla tego przypisania dla minimalnej odległości od `i` do `j` w `D`?",
        options: [
            { text: "D_ij^(k) wyznaczana jest przez porównanie, co jest u spodu najmniejsze: $D_{ij}^{(k-1)}$ czy ucięcie przez krawędź węzła pośredniego w nowej drodze $D_{ik}^{(k-1)} + D_{kj}^{(k-1)}$. Wartość ta zastępuje wiersze by utrzymać stan bieżący pod indeksowaną macierz wyjść w $O(V^3)$.", isCorrect: true },
            { text: "Dodaje rzut po zminimalizowaniu w tablicy ujemnych wielkości po bokach trójkątów dla wagi $w$.", isCorrect: false },
            { text: "Sprowadza się pod potrójne i niezależne przeszukiwania i odwrócenia list dla węzła na wyjściu by powielać je.", isCorrect: false },
            { text: "Modyfikuje ścieżki i powroty wyliczając drogi krzyżowe z $O(E)$ i rzucając BFS.", isCorrect: false }
        ]
    },
    {
        id: 213,
        category: "Maksymalne Skrzyżowania (Bipartite)",
        text: "Redukcja, adaptacja i implementacja zagadnienia dróg powiązania dla Maksymalnego Skojarzenia Grafów Dwudzielnych w oparciu o wejściowe kody przepływu polega na procedurze modyfikującej wyliczenia z użyciem Edmondsa Karpa w tym, że:",
        options: [
            { text: "Z każdej gałęzi super-źródła $s$ do elementu z węzłów w lewej stronie $L$ poprowadzony zostaje ułamek skierowany z pojemnością dla 1 ($c = 1$). Od prawej składowej w krawędzi wychodzącej w prawo do super-ujścia $t$ pociągnięta zostaje gałąź o doliczeniu pojemności identycznie na 1.", isCorrect: true },
            { text: "Usuwa w całości wszystkie ujemne przepływy z bazy z ucięciami i ustawieniem pod stały układ 0 by uniknąć zapętleń w pętlach krzyżujących BFS.", isCorrect: false },
            { text: "Pod każdą gałąź rzuca relaksację by ukrócić drzewo AVL do 2 dróg przeliczonych dla zliczeń.", isCorrect: false },
            { text: "W całości jest tylko mitem bez przełożenia do grafów dla Bellmana-Forda o stałym $c = \\infty$.", isCorrect: false }
        ]
    },
    {
        id: 214,
        category: "Wprowadzenie",
        text: "Co to jest algorytm zgodnie z definicją z wykładów?",
        options: [
            { text: "Skończony ciąg jasno zdefiniowanych czynności koniecznych do rozwiązania danego problemu.", isCorrect: true },
            { text: "Program komputerowy napisany w języku C++ lub Python.", isCorrect: false },
            { text: "Zbiór danych przechowywanych w pamięci operacyjnej.", isCorrect: false },
            { text: "Nieskończona pętla operacji arytmetycznych.", isCorrect: false }
        ]
    },
    {
        id: 215,
        category: "Złożoność Obliczeniowa",
        text: "Jakie są dwa główne kryteria oceny dobrego algorytmu?",
        options: [
            { text: "Poprawność (zwraca prawidłowy wynik).", isCorrect: true },
            { text: "Efektywność (zużywa minimalną ilość czasu i pamięci).", isCorrect: true },
            { text: "Krótkość kodu źródłowego.", isCorrect: false },
            { text: "Brak użycia rekurencji.", isCorrect: false }
        ]
    },
    {
        id: 216,
        category: "Złożoność Obliczeniowa",
        text: "Czym jest złożoność pamięciowa algorytmu?",
        options: [
            { text: "Ilością dodatkowej pamięci potrzebnej do wykonania zadania, wyrażoną jako funkcja rozmiaru danych wejściowych.", isCorrect: true },
            { text: "Czasem potrzebnym na zapisanie danych na dysk twardy.", isCorrect: false },
            { text: "Rozmiarem pliku wykonywalnego na dysku.", isCorrect: false },
            { text: "Ilością linii kodu pseudokodu.", isCorrect: false }
        ]
    },
    {
        id: 217,
        category: "Notacje Asymptotyczne",
        text: "Co oznacza zapis $f(n) = O(g(n))$?",
        options: [
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem górnym funkcji $f(n)$.", isCorrect: true },
            { text: "Funkcja $f(n)$ rośnie szybciej niż $g(n)$.", isCorrect: false },
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem dolnym funkcji $f(n)$.", isCorrect: false },
            { text: "Obie funkcje rosną w dokładnie tym samym tempie.", isCorrect: false }
        ]
    },
    {
        id: 218,
        category: "Notacje Asymptotyczne",
        text: "Co oznacza zapis $f(n) = \\Omega(g(n))$?",
        options: [
            { text: "Funkcja $g(n)$ jest asymptotycznym ograniczeniem dolnym funkcji $f(n)$.", isCorrect: true },
            { text: "Określa optymistyczny scenariusz działania algorytmu.", isCorrect: true },
            { text: "Zawsze gwarantuje, że algorytm wykona się w czasie stałym.", isCorrect: false },
            { text: "Oznacza dokładne oszacowanie czasu działania.", isCorrect: false }
        ]
    },

    // --- SORTOWANIA OPARTE NA PORÓWNANIACH ---
    {
        id: 219,
        category: "Sortowanie przez wstawianie",
        text: "Jaka jest złożoność czasowa sortowania przez wstawianie (Insertion Sort) w optymistycznym przypadku?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false }
        ]
    },
    {
        id: 220,
        category: "Sortowanie przez wstawianie",
        text: "Czy algorytm Insertion Sort sortuje w miejscu (in-place)?",
        options: [
            { text: "Tak, wymaga tylko $O(1)$ dodatkowej pamięci.", isCorrect: true },
            { text: "Nie, wymaga dodatkowej tablicy o rozmiarze $n$.", isCorrect: false },
            { text: "Tak, wymaga pamięci $O(\\log n)$ na stos wywołań.", isCorrect: false },
            { text: "Nie, wymaga tablicy rozmiaru $k$ do zliczania.", isCorrect: false }
        ]
    },
    {
        id: 221,
        category: "Merge Sort",
        text: "Jaka jest główna technika (strategia) wykorzystywana w sortowaniu przez scalanie (Merge Sort)?",
        options: [
            { text: "Dziel i zwyciężaj (Divide and Conquer).", isCorrect: true },
            { text: "Programowanie dynamiczne.", isCorrect: false },
            { text: "Algorytm zachłanny.", isCorrect: false },
            { text: "Programowanie liniowe.", isCorrect: false }
        ]
    },
    {
        id: 222,
        category: "Merge Sort",
        text: "Jaka jest złożoność pamięciowa algorytmu Merge Sort?",
        options: [
            { text: "$O(n)$ ze względu na tablice pomocnicze przy scalaniu.", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 223,
        category: "Quicksort",
        text: "Jakie jest najgorsze (pesymistyczne) ograniczenie czasowe dla algorytmu Quicksort?",
        options: [
            { text: "$O(n^2)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n^3)$", isCorrect: false }
        ]
    },
    {
        id: 224,
        category: "Quicksort",
        text: "Które zdanie najlepiej opisuje działanie procedury Partition w Quicksort?",
        options: [
            { text: "Dzieli ona tablicę na dwie części: elementy mniejsze (lub równe) pivotowi i elementy większe od pivota.", isCorrect: true },
            { text: "Scala ona dwie posortowane tablice w jedną.", isCorrect: false },
            { text: "Znajduje największy element i umieszcza go na końcu.", isCorrect: false },
            { text: "Wykrywa medianę w czasie liniowym.", isCorrect: false }
        ]
    },
    {
        id: 225,
        category: "Teoria Sortowań",
        text: "Jakie jest dolne ograniczenie złożoności dla wszystkich algorytmów sortowania opartych na porównaniach?",
        options: [
            { text: "$\\Omega(n \\log n)$", isCorrect: true },
            { text: "$\\Omega(n)$", isCorrect: false },
            { text: "$\\Omega(n^2)$", isCorrect: false },
            { text: "$\\Omega(1)$", isCorrect: false }
        ]
    },

    // --- SORTOWANIE W CZASIE LINIOWYM ---
    {
        id: 226,
        category: "Counting Sort",
        text: "Jaka jest złożoność czasowa sortowania przez zliczanie (Counting Sort) przy tablicy $n$-elementowej o wartościach z zakresu $0$ do $k$?",
        options: [
            { text: "$\\Theta(n + k)$", isCorrect: true },
            { text: "$\\Theta(n \\log n)$", isCorrect: false },
            { text: "$\\Theta(n^2)$", isCorrect: false },
            { text: "$\\Theta(k \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 227,
        category: "Radix Sort",
        text: "Z jakiego algorytmu pomocniczego (jako podprocedury) zazwyczaj korzysta sortowanie pozycyjne (Radix Sort)?",
        options: [
            { text: "Sortowania przez zliczanie (Counting Sort).", isCorrect: true },
            { text: "Quicksortu.", isCorrect: false },
            { text: "Algorytmu Prima.", isCorrect: false },
            { text: "Sortowania bąbelkowego.", isCorrect: false }
        ]
    },
    {
        id: 228,
        category: "Bucket Sort",
        text: "Dla jakich danych wejściowych algorytm Bucket Sort działa najszybciej (osiąga średni czas $O(n)$)?",
        options: [
            { text: "Dla danych losowych z rozkładu jednostajnego na przedziale $[0, 1)$.", isCorrect: true },
            { text: "Dla danych odwrotnie posortowanych.", isCorrect: false },
            { text: "Dla małego zbioru unikalnych liczb całkowitych.", isCorrect: false },
            { text: "Tylko dla danych w postaci ciągów tekstowych.", isCorrect: false }
        ]
    },

    // --- STRUKTURY LINIOWE: STOS, KOLEJKA, LISTA ---
    {
        id: 229,
        category: "Zbiory Dynamiczne: Stos",
        text: "Jaka jest złożoność operacji Push i Pop w prawidłowo zaimplementowanym stosie (Stack)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "Zależy to od rozmiaru elementów na stosie.", isCorrect: false }
        ]
    },
    {
        id: 230,
        category: "Zbiory Dynamiczne: Kolejka",
        text: "Czym charakteryzuje się problem 'underflow' (niedomiaru) w kolejce lub stosie?",
        options: [
            { text: "Próbą usunięcia elementu (Dequeue/Pop) ze struktury, która jest już pusta.", isCorrect: true },
            { text: "Próbą wstawienia elementu do pełnej struktury.", isCorrect: false },
            { text: "Przekroczeniem maksymalnej wartości klucza Integer.", isCorrect: false },
            { text: "Błędem indeksowania w tablicy dynamicznej.", isCorrect: false }
        ]
    },
    {
        id: 231,
        category: "Listy Dowiązane",
        text: "Jaka jest pesymistyczna złożoność wyszukiwania konkretnej wartości w jednokierunkowej liście wiązanej?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },

    // --- KOPCE I KOLEJKI PRIORYTETOWE ---
    {
        id: 232,
        category: "Kopce: Reprezentacja",
        text: "Jeśli kopiec binarny jest reprezentowany przez tablicę indeksowaną od 1, to gdzie znajduje się prawy potomek węzła o indeksie $i$?",
        options: [
            { text: "Pod indeksem $2i + 1$.", isCorrect: true },
            { text: "Pod indeksem $2i$.", isCorrect: false },
            { text: "Pod indeksem $\\lfloor i/2 \\rfloor$.", isCorrect: false },
            { text: "Pod indeksem $i + 2$.", isCorrect: false }
        ]
    },
    {
        id: 233,
        category: "Kolejki Priorytetowe",
        text: "Które z wymienionych operacji są typowe dla Kolejki Priorytetowej typu Max?",
        options: [
            { text: "Insert", isCorrect: true },
            { text: "Maximum", isCorrect: true },
            { text: "Extract-Max", isCorrect: true },
            { text: "Increase-Key", isCorrect: true }
        ]
    },
    {
        id: 234,
        category: "Kolejki Priorytetowe",
        text: "Jaki jest czas działania operacji `Extract-Max` w oparciu o standardowy kopiec binarny?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },

    // --- DRZEWA BST I RB ---
    {
        id: 235,
        category: "Drzewa BST",
        text: "Jaka właściwość definiuje Binarne Drzewo Poszukiwań (BST)?",
        options: [
            { text: "Dla każdego węzła $x$, wszystkie klucze w jego lewym poddrzewie są $\\le x.key$, a w prawym poddrzewie $\\ge x.key$.", isCorrect: true },
            { text: "Drzewo musi być zawsze idealnie zbalansowane.", isCorrect: false },
            { text: "Węzły nie mogą mieć dwojga dzieci.", isCorrect: false },
            { text: "Korzeń przechowuje zawsze najmniejszą wartość.", isCorrect: false }
        ]
    },
    {
        id: 236,
        category: "Drzewa BST",
        text: "Z jaką złożonością działają operacje Wyszukiwania, Wstawiania i Usuwania w BST w najgorszym (pesymistycznym) przypadku?",
        options: [
            { text: "$O(n)$ - gdy drzewo ulegnie degeneracji do postaci listy.", isCorrect: true },
            { text: "$O(\\log n)$ - zawsze.", isCorrect: false },
            { text: "$O(1)$ - gdy znamy wskaźnik na korzeń.", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 237,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Jaki kolor musi mieć nowy liść $NIL$ dodawany na dno drzewa RB?",
        options: [
            { text: "Czarny.", isCorrect: true },
            { text: "Czerwony.", isCorrect: false },
            { text: "Zależy od koloru rodzica.", isCorrect: false },
            { text: "Biały.", isCorrect: false }
        ]
    },
    {
        id: 238,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Czym jest 'Czarna Wysokość' (Black-Height) węzła $x$ w drzewie RB?",
        options: [
            { text: "Liczbą czarnych węzłów na dowolnej prostej ścieżce od $x$ (bez $x$) do liścia $NIL$.", isCorrect: true },
            { text: "Sumą wszystkich czarnych węzłów w lewym poddrzewie $x$.", isCorrect: false },
            { text: "Liczbą czerwonych węzłów odjętą od liczby czarnych węzłów.", isCorrect: false },
            { text: "Maksymalną głębokością drzewa.", isCorrect: false }
        ]
    },

    // --- HASZOWANIE ---
    {
        id: 239,
        category: "Tablice Haszujące",
        text: "Na czym polega adresowanie bezpośrednie (Direct Addressing)?",
        options: [
            { text: "Klucz jest bezpośrednio używany jako indeks w tablicy (np. $A[k] = element$).", isCorrect: true },
            { text: "Wszystkie klucze lądują na jednej liście wiązanej.", isCorrect: false },
            { text: "Każdy element wymaga przejścia przez 3 funkcje haszujące.", isCorrect: false },
            { text: "Klucz jest szyfrowany algorytmem SHA-256.", isCorrect: false }
        ]
    },
    {
        id: 240,
        category: "Tablice Haszujące",
        text: "Co charakteryzuje adresowanie otwarte w tablicach haszujących?",
        options: [
            { text: "Wszystkie elementy są przechowywane wewnątrz samej tablicy, nie ma żadnych zewnętrznych list wiązanych.", isCorrect: true },
            { text: "Kolizje rozwiązuje się przez znalezienie kolejnego pustego slotu (np. sondowanie liniowe).", isCorrect: true },
            { text: "Jest to inna nazwa na metodę łańcuchową.", isCorrect: false },
            { text: "Współczynnik wypełnienia (load factor) może wynosić więcej niż 1.", isCorrect: false }
        ]
    },
    {
        id: 241,
        category: "Tablice Haszujące",
        text: "Jakie sondowanie (probing) generuje problem 'pierwotnego grupowania' (primary clustering)?",
        options: [
            { text: "Sondowanie liniowe (Linear Probing).", isCorrect: true },
            { text: "Sondowanie kwadratowe (Quadratic Probing).", isCorrect: false },
            { text: "Podwójne haszowanie (Double Hashing).", isCorrect: false },
            { text: "Metoda łańcuchowa (Chaining).", isCorrect: false }
        ]
    },
    {
        id: 242,
        category: "Haszowanie",
        text: "Czym jest 'współczynnik wypełnienia' (load factor) $\\alpha$ dla tablicy haszującej o rozmiarze $m$ przechowującej $n$ elementów?",
        options: [
            { text: "$\\alpha = n / m$", isCorrect: true },
            { text: "$\\alpha = m / n$", isCorrect: false },
            { text: "$\\alpha = n \\bmod m$", isCorrect: false },
            { text: "$\\alpha = m - n$", isCorrect: false }
        ]
    },

    // --- SKIP LISTY I STATYSTYKI ---
    {
        id: 243,
        category: "Skip Lists",
        text: "Jakie operacje wspiera Skip List w oczekiwanym czasie $O(\\log n)$?",
        options: [
            { text: "Wyszukiwanie, wstawianie i usuwanie elementu.", isCorrect: true },
            { text: "Tylko wyszukiwanie.", isCorrect: false },
            { text: "Znalezienie minimalnego drzewa rozpinającego.", isCorrect: false },
            { text: "Sortowanie tablicy wejściowej.", isCorrect: false }
        ]
    },
    {
        id: 244,
        category: "Statystyki Pozycyjne",
        text: "Która statystyka pozycyjna zbioru odpowiada Minimum, a która Maksimum?",
        options: [
            { text: "Minimum to 1-sza statystyka pozycyjna.", isCorrect: true },
            { text: "Maksimum to $n$-ta statystyka pozycyjna.", isCorrect: true },
            { text: "Minimum to $n$-ta statystyka pozycyjna.", isCorrect: false },
            { text: "Maksimum to 0-ta statystyka pozycyjna.", isCorrect: false }
        ]
    },
    {
        id: 245,
        category: "Dynamiczne Statystyki Pozycyjne",
        text: "Jakie dodatkowe pole przechowuje węzeł w drzewie statystyk pozycyjnych (OS-Tree)?",
        options: [
            { text: "Pole `size`, oznaczające liczbę węzłów w poddrzewie o korzeniu w tym węźle (włączając sam węzeł).", isCorrect: true },
            { text: "Pole `height`, przechowujące wysokość poddrzewa.", isCorrect: false },
            { text: "Pole `hash`, dla szybkiego dostępu O(1).", isCorrect: false },
            { text: "Pole `max`, dla określenia największego klucza.", isCorrect: false }
        ]
    },

    // --- DRZEWA PRZEDZIAŁOWE ---
    {
        id: 246,
        category: "Drzewa Przedziałowe",
        text: "Co służy jako główny klucz sortowania węzłów w Drzewie Przedziałowym (Interval Tree)?",
        options: [
            { text: "Dolny kraniec przedziału ($interval.low$).", isCorrect: true },
            { text: "Górny kraniec przedziału ($interval.high$).", isCorrect: false },
            { text: "Środek przedziału.", isCorrect: false },
            { text: "Rozmiar (długość) przedziału.", isCorrect: false }
        ]
    },
    {
        id: 247,
        category: "Drzewa Przedziałowe",
        text: "Co przechowuje dodatkowy atrybut `max` w węźle Drzewa Przedziałowego?",
        options: [
            { text: "Największą wartość górnego krańca przedziału (high) spośród wszystkich przedziałów w poddrzewie tego węzła.", isCorrect: true },
            { text: "Największy dolny kraniec przedziału w lewym poddrzewie.", isCorrect: false },
            { text: "Maksymalną ilość przedziałów krzyżujących się w jednym punkcie.", isCorrect: false },
            { text: "Maksymalną wysokość poddrzewa czarnego.", isCorrect: false }
        ]
    },

    // --- GRAFY: WPROWADZENIE ---
    {
        id: 248,
        category: "Grafy: Reprezentacja",
        text: "W jakich przypadkach reprezentacja grafu jako Macierz Sąsiedztwa (Adjacency Matrix) jest najbardziej opłacalna?",
        options: [
            { text: "Gdy graf jest gęsty (liczba krawędzi $|E|$ jest bliska $|V|^2$).", isCorrect: true },
            { text: "Gdy chcemy bardzo szybko sprawdzać, czy istnieje krawędź między konkretnymi wierzchołkami $u$ i $v$.", isCorrect: true },
            { text: "Gdy zależy nam na oszczędności pamięci przy grafach rzadkich.", isCorrect: false },
            { text: "Gdy używamy algorytmu Kruskala.", isCorrect: false }
        ]
    },
    {
        id: 249,
        category: "Grafy: BFS",
        text: "Czego wynikiem jest działanie algorytmu Przeszukiwania Wszerz (BFS) ze źródła $s$?",
        options: [
            { text: "Drzewa rozpinającego (BFS-tree) zawierającego najkrótsze ścieżki pod względem liczby krawędzi od $s$ do każdego osiągalnego wierzchołka.", isCorrect: true },
            { text: "Posortowanej topologicznie listy wierzchołków.", isCorrect: false },
            { text: "Minimalnego Drzewa Rozpinającego (MST) dla wag ujemnych.", isCorrect: false },
            { text: "Ciągu krawędzi powrotnych w DAG.", isCorrect: false }
        ]
    },
    {
        id: 250,
        category: "Grafy: DFS",
        text: "Jakie struktury lub koncepcje czasowe przypisuje algorytm DFS (Przeszukiwanie w Głąb) każdemu odwiedzonemu wierzchołkowi?",
        options: [
            { text: "Czas odkrycia $d[v]$ (discovery time).", isCorrect: true },
            { text: "Czas zakończenia $f[v]$ (finish time).", isCorrect: true },
            { text: "Dystans z użyciem relaksacji $dist[v]$.", isCorrect: false },
            { text: "Pozycję w kolejce priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 251,
        category: "Grafy: Sortowanie Topologiczne",
        text: "Na jakim typie grafów można przeprowadzić Sortowanie Topologiczne?",
        options: [
            { text: "Tylko na Skierowanych Grafach Acyklicznych (DAG).", isCorrect: true },
            { text: "Na dowolnych grafach nieskierowanych.", isCorrect: false },
            { text: "Na grafach zawierających cykle o ujemnych wagach.", isCorrect: false },
            { text: "Na Drzewach Czerwono-Czarnych.", isCorrect: false }
        ]
    },
    {
        id: 252,
        category: "Grafy: Sortowanie Topologiczne",
        text: "Jaki krok wykonuje się po przeprowadzeniu DFS, by uzyskać porządek topologiczny?",
        options: [
            { text: "Odkłada się wierzchołki na początek listy powiązanej (linked list) w momencie, gdy są całkowicie przetworzone (czas wyjścia $f[u]$).", isCorrect: true },
            { text: "Sortuje się je rosnąco po czasie wejścia $d[u]$.", isCorrect: false },
            { text: "Wywołuje się procedurę Heap-Extract-Max na czasach $d[u]$.", isCorrect: false },
            { text: "Obraca się krawędzie i uruchamia BFS.", isCorrect: false }
        ]
    },

    // --- GRAFY: MST ---
    {
        id: 253,
        category: "Minimalne Drzewo Rozpinające (MST)",
        text: "Co to jest Minimalne Drzewo Rozpinające (MST) dla spójnego grafu ważonego?",
        options: [
            { text: "Jest to podzbiór krawędzi bez cykli, który łączy wszystkie wierzchołki, przy czym suma wag tych krawędzi jest najmniejsza z możliwych.", isCorrect: true },
            { text: "Jest to drzewo najkrótszych ścieżek od zadanego korzenia do innych węzłów.", isCorrect: false },
            { text: "Jest to graf po usunięciu wszystkich ujemnych krawędzi.", isCorrect: false },
            { text: "Jest to podgraf zawierający tylko jeden najmniejszy cykl.", isCorrect: false }
        ]
    },
    {
        id: 254,
        category: "MST: Algorytm Prima",
        text: "Jakie struktury danych stosuje się do optymalnej implementacji algorytmu Prima?",
        options: [
            { text: "Kolejkę priorytetową (Min-Heap lub Kopiec Fibonacciego).", isCorrect: true },
            { text: "Zwykłą kolejkę FIFO.", isCorrect: false },
            { text: "Zbiory Rozłączne (Union-Find).", isCorrect: false },
            { text: "Drzewa Przedziałowe.", isCorrect: false }
        ]
    },
    {
        id: 255,
        category: "MST: Algorytm Kruskala",
        text: "Jak działa algorytm Kruskala?",
        options: [
            { text: "Sortuje krawędzie od najmniejszej wagi, a następnie zachłannie dodaje je do lasu, o ile nie tworzą cyklu.", isCorrect: true },
            { text: "Wybiera wierzchołek początkowy i dodaje najtańsze krawędzie z niego wychodzące.", isCorrect: false },
            { text: "Działa w oparciu o mnożenie macierzy wag.", isCorrect: false },
            { text: "Relaksuje krawędzie w celu ominięcia ujemnych cykli.", isCorrect: false }
        ]
    },
    {
        id: 256,
        category: "Struktury Zbiorów Rozłącznych (Disjoint Sets)",
        text: "Które z poniższych są dwiema kluczowymi heurystykami przyspieszającymi operacje na zbiorach rozłącznych (np. w algorytmie Kruskala)?",
        options: [
            { text: "Łączenie według rangi (Union by rank).", isCorrect: true },
            { text: "Kompresja ścieżki (Path compression).", isCorrect: true },
            { text: "Haszowanie dwukrotne.", isCorrect: false },
            { text: "Sondowanie liniowe.", isCorrect: false }
        ]
    },

    // --- GRAFY: NAJKRÓTSZE ŚCIEŻKI ---
    {
        id: 257,
        category: "Najkrótsze Ścieżki: Relaksacja",
        text: "Jaka jest rola operacji Relaksacji (Relax) krawędzi $(u,v)$?",
        options: [
            { text: "Sprawdza czy dystans do $v$ można skrócić przechodząc przez węzeł $u$; jeśli tak, aktualizuje $d[v] = d[u] + w(u,v)$ i ustawia przodka.", isCorrect: true },
            { text: "Zwiększa wagę wszystkich krawędzi o 1.", isCorrect: false },
            { text: "Zamienia węzeł w korzeń drzewa MST.", isCorrect: false },
            { text: "Usuwa krawędź z grafu residualnego.", isCorrect: false }
        ]
    },
    {
        id: 258,
        category: "Algorytm Dijkstry",
        text: "Złożoność algorytmu Dijkstry na zwykłym kopcu binarnym wynosi:",
        options: [
            { text: "$O((|V| + |E|) \\log |V|)$", isCorrect: true },
            { text: "$O(|V|^2)$", isCorrect: false },
            { text: "$O(|V| \\cdot |E|)$", isCorrect: false },
            { text: "$O(|E|)$", isCorrect: false }
        ]
    },
    {
        id: 259,
        category: "Algorytm Bellmana-Forda",
        text: "Dlaczego algorytm Bellmana-Forda potrafi wykryć ujemne cykle osiągalne ze źródła?",
        options: [
            { text: "Ponieważ po wykonaniu $|V|-1$ serii relaksacji wszystkich krawędzi wykonuje jeszcze jedną dodatkową weryfikację. Jeśli wartość jakiejkolwiek odległości wciąż można zmniejszyć, to musi istnieć ujemny cykl.", isCorrect: true },
            { text: "Ponieważ zlicza ujemne wagi i rzuca wyjątek gdy jest ich ponad 0.", isCorrect: false },
            { text: "Ponieważ zapisuje historię w stosie i szuka duplikatów węzłów w trybie rekurencyjnym.", isCorrect: false },
            { text: "Ponieważ używa metody zamiatania z geometrii by policzyć przecięcia.", isCorrect: false }
        ]
    },
    {
        id: 260,
        category: "Najkrótsze Ścieżki w DAG",
        text: "Jaki jest czas działania algorytmu wyznaczającego najkrótsze ścieżki z jednego źródła dla grafu DAG?",
        options: [
            { text: "Czas liniowy $\\Theta(|V| + |E|)$.", isCorrect: true },
            { text: "$O(|E| \\log |V|)$.", isCorrect: false },
            { text: "Czas kwadratowy $O(|V|^2)$.", isCorrect: false },
            { text: "Zależy to od faktu, czy graf ma wagi ujemne czy dodatnie.", isCorrect: false }
        ]
    },
    {
        id: 261,
        category: "Algorytm Floyda-Warshalla",
        text: "Jakie techniki algorytmiczne stosuje algorytm Floyda-Warshalla?",
        options: [
            { text: "Programowanie dynamiczne (Dynamic Programming).", isCorrect: true },
            { text: "Złożoność $\\Theta(|V|^3)$.", isCorrect: true },
            { text: "Algorytmy zachłanne (Greedy Algorithms).", isCorrect: false },
            { text: "Dziel i Zwyciężaj.", isCorrect: false }
        ]
    },

    // --- KOSZT ZAMORTYZOWANY ---
    {
        id: 262,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Na czym polega Metoda Księgowania (Accounting Method)?",
        options: [
            { text: "Przypisuje operacjom różne 'opłaty amortyzowane' (kredyty). Jeśli opłata jest wyższa niż koszt faktyczny, reszta kredytów jest odkładana na przyszłość by pokryć operacje bardzo kosztowne.", isCorrect: true },
            { text: "Wylicza całkowity koszt dla sekwencji $n$ operacji i dzieli ten koszt przez $n$.", isCorrect: false },
            { text: "Rozpisuje koszty w formie drzewa powiązanego z potencjałem.", isCorrect: false },
            { text: "W ogóle nie jest metodą związaną z zamortyzowanym kosztem.", isCorrect: false }
        ]
    },
    {
        id: 263,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Na czym polega Metoda Kosztu Sumarycznego (Aggregate Method)?",
        options: [
            { text: "Wyznacza absolutne ograniczenie górne $T(n)$ na ciąg $n$ operacji, a następnie określa koszt amortyzowany jako $T(n)/n$. Każda operacja z ciągu otrzymuje taki sam koszt.", isCorrect: true },
            { text: "Każdy rodzaj operacji w sekwencji otrzymuje własny indywidualny koszt oparty na wektorach funkcji.", isCorrect: false },
            { text: "Metoda ta przypisuje kredyty na zapas do struktury.", isCorrect: false },
            { text: "Wymaga funkcji $\\Phi(D)$ na każdym kroku stanu struktury.", isCorrect: false }
        ]
    },
    {
        id: 264,
        category: "Analiza Kosztu Zamortyzowanego",
        text: "Czym jest metoda potencjału w analizie zamortyzowanej?",
        options: [
            { text: "Przypisuje całej strukturze danych stan zwany 'potencjałem' $\\Phi$, reprezentujący zakumulowany zapas czasu, używany do pokrycia ewentualnych opłat w przyszłości.", isCorrect: true },
            { text: "Jest to matematyczna fizyka przepływów grafu z ujemnym prądem.", isCorrect: false },
            { text: "To inaczej metoda księgowania gdzie płacimy 2 monety zamiast 1.", isCorrect: false },
            { text: "Mierzy napięcie obciążeniowe RAM procesora dla systemu PRAM.", isCorrect: false }
        ]
    },

    // --- SIECI PRZEPŁYWOWE ---
    {
        id: 265,
        category: "Sieci Przepływowe",
        text: "Jakie ograniczenie (poza przepustowością $f(u,v) \\le c(u,v)$) musi spełniać prawidłowy przepływ w każdym wierzchołku wewnętrznym (oprócz źródła $s$ i ujścia $t$)?",
        options: [
            { text: "Zasada zachowania przepływu (Flow conservation): suma przepływów wpływających do wierzchołka musi być równa sumie przepływów z niego wypływających.", isCorrect: true },
            { text: "Przepływ musi być dodatni we wszystkich krawędziach połączonych z $v$.", isCorrect: false },
            { text: "Liczba krawędzi wchodzących i wychodzących musi być parzysta.", isCorrect: false },
            { text: "Musi on sumować się do zera na całym grafie z wyłączeniem liści.", isCorrect: false }
        ]
    },
    {
        id: 266,
        category: "Algorytm Forda-Fulkersona",
        text: "Co to jest ścieżka powiększająca (Augmenting Path)?",
        options: [
            { text: "Jest to prosta ścieżka ze źródła $s$ do ujścia $t$ w grafie residualnym, wzdłuż której można zwiększyć przepływ.", isCorrect: true },
            { text: "Ścieżka w grafie DAG będąca najkrótszym dojściem do $t$.", isCorrect: false },
            { text: "Droga w drzewie MST o najmniejszym koszcie.", isCorrect: false },
            { text: "Cykl Eulera przechodzący przez $s$ i $t$.", isCorrect: false }
        ]
    },
    {
        id: 267,
        category: "Sieci Przepływowe",
        text: "Na czym polega Twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Wartość maksymalnego przepływu w sieci jest dokładnie równa pojemności minimalnego przekroju (cięcia) oddzielającego $s$ i $t$.", isCorrect: true },
            { text: "Każda krawędź ujemna w przepływie tnie graf na połowy.", isCorrect: false },
            { text: "Maksymalny prąd z $s$ równa się minimalnej długości ścieżki w BFS.", isCorrect: false },
            { text: "Przepływy w sieci są uwarunkowane wielomianowym progiem minimalnym.", isCorrect: false }
        ]
    },
    {
        id: 268,
        category: "Algorytm Edmondsa-Karpa",
        text: "Co charakteryzuje algorytm Edmondsa-Karpa wyznaczający maksymalny przepływ?",
        options: [
            { text: "Jest to wariant Forda-Fulkersona, w którym ścieżki powiększające szukane są za pomocą BFS (najkrótsza droga pod kątem liczby krawędzi).", isCorrect: true },
            { text: "Działa w czasie $O(V \\cdot E^2)$.", isCorrect: true },
            { text: "Do znajdowania ścieżek wykorzystuje strukturę Union-Find.", isCorrect: false },
            { text: "Służy głównie do rozwiązywania problemu Komiwojażera.", isCorrect: false }
        ]
    },
    {
        id: 269,
        category: "Skojarzenia w Grafach",
        text: "Jakie twierdzenie powiązuje rozmiar maksymalnego skojarzenia w grafach dwudzielnych z innymi strukturami?",
        options: [
            { text: "Twierdzenie Königa: W grafie dwudzielnym rozmiar maksymalnego skojarzenia jest równy rozmiarowi minimalnego pokrycia wierzchołkowego.", isCorrect: true },
            { text: "Twierdzenie o Rekurencji Uniwersalnej Master Theorem.", isCorrect: false },
            { text: "Twierdzenie Bayesa dla ułamków przepływowych.", isCorrect: false },
            { text: "Lemat o bezpiecznej krawędzi Kruskala.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY TEKSTOWE ---
    {
        id: 270,
        category: "Algorytmy Tekstowe: Wstęp",
        text: "W problemie wyszukiwania wzorca w tekście mamy wzorzec o długości $m$ i tekst o długości $n$. Czym jest przesunięcie okna (shift)?",
        options: [
            { text: "Wartością $s$ ($0 \\le s \\le n-m$), dla której wszystkie $m$ znaków wzorca pokrywa się ze znakami tekstu startując od pozycji $T[s]$.", isCorrect: true },
            { text: "Wielkością bitową o jaką program shifruje litery ASCI.", isCorrect: false },
            { text: "Rotacją drzewa BST w strukturze weryfikacji.", isCorrect: false },
            { text: "Ilością pomyłek na krawędzi wzorca.", isCorrect: false }
        ]
    },
    {
        id: 271,
        category: "Algorytmy Tekstowe: Rabin-Karp",
        text: "Jakie główne zagrożenie optymalizacyjne kryje się w metodzie Rabina-Karpa pomimo stałego $O(1)$ czasu aktualizacji hasza?",
        options: [
            { text: "Zjawisko występowania fałszywych trafień (spurious hits) wymuszające sprawdzanie znak po znaku za każdym razem gdy hasze się pokrywają, generujące pesymistyczny czas $O((n-m+1)m)$.", isCorrect: true },
            { text: "Zjawisko 'pierwotnego grupowania' na listach powiązanych.", isCorrect: false },
            { text: "Błąd przepełnienia kolejki PRAM przy małym module.", isCorrect: false },
            { text: "Nie wylicza nigdy poprawnie wzorca od końca tekstu.", isCorrect: false }
        ]
    },
    {
        id: 272,
        category: "Algorytmy Tekstowe: KMP",
        text: "Złożoność czasowa wyszukiwania samego wzorca w tekście przez KMP (bez czasu tworzenia tablicy pi) to:",
        options: [
            { text: "$\\Theta(n)$", isCorrect: true },
            { text: "$\\Theta(n+m)$", isCorrect: false },
            { text: "$\\Theta(n \\log m)$", isCorrect: false },
            { text: "$\\Theta(m)$", isCorrect: false }
        ]
    },
    {
        id: 273,
        category: "Algorytmy Tekstowe: Boyera-Moore",
        text: "W jakich typach problemów z tekstem algorytm Boyera-Moore'a sprawdza się najlepiej, dając czas bliski $O(n/m)$?",
        options: [
            { text: "Kiedy alfabet (np. ASCII) jest duży w stosunku do wielkości tekstu, co zmniejsza częstość zgodności liter w Tekście i Wzorcu uruchamiając potężne skoki Heurystyki Złego Znaku.", isCorrect: true },
            { text: "Kiedy tekst jest binarny (zawiera tylko litery 0 i 1).", isCorrect: false },
            { text: "Kiedy wzorzec występuje w tekście tysiące razy.", isCorrect: false },
            { text: "Gdy wektor tekstu ma długość mniejszą od wzorca.", isCorrect: false }
        ]
    },

    // --- KOMPRESJA I ENTROPIA ---
    {
        id: 274,
        category: "Teoria Informacji",
        text: "Jakie zastosowanie i własności ma miara Entropii opisana przez Shannona na wykładach z kompresji?",
        options: [
            { text: "Opisuje nieuporządkowanie (ilość informacji) dla zestawu z prawdopodobieństwami, dając dolny teoretyczny limit ilości bitów na zakodowanie danych.", isCorrect: true },
            { text: "Opiera się na logarytmach na bazie dwójkowej ze wskaźnika częstości dla $p_i$.", isCorrect: true },
            { text: "Obliczana jest poprzez mnożenie w wektorze macierzowym odległości bitowych.", isCorrect: false },
            { text: "Znajduje się tylko w kompresji LZW z kodowaniem zjawisk słownikowych.", isCorrect: false }
        ]
    },
    {
        id: 275,
        category: "Kodowanie Huffmana",
        text: "Ile dzieci posiada nowo stworzony węzeł wewnętrzny (internal node) $z$, który podczas działania pętli algorytmu zostaje wyciągnięty jako połączenie $x$ i $y$ z kolejki?",
        options: [
            { text: "Zawsze dwoje dzieci (jest pełnym ojcem dla połączonych gałęzi $x$ i $y$).", isCorrect: true },
            { text: "Jedno dziecko w celu utworzenia zbalansowanej listy.", isCorrect: false },
            { text: "Zero dzieci, ponieważ wstawiany jest na liść grafu w drzewie kompresji.", isCorrect: false },
            { text: "Zależy to od wagi algorytmu LZW przypisanego dla klucza kodu.", isCorrect: false }
        ]
    },
    {
        id: 276,
        category: "Kompresja",
        text: "Czym charakteryzuje się algorytm kompresji LZW (Lempel-Ziv-Welch) w porównaniu do Huffmana?",
        options: [
            { text: "LZW operuje w formie algorytmu słownikowego, budując tabelę częstości \"w locie\" bez potrzeby znajomości całego pliku z wyprzedzeniem.", isCorrect: true },
            { text: "Wymaga dwukrotnego przeczytania tekstu w przeciwieństwie do Huffmana.", isCorrect: false },
            { text: "Produkuje stałe i prefiksowe mapowania binarne przez Priority Queue.", isCorrect: false },
            { text: "Działa dobrze tylko dla tablic zawierających cyfry arabskie.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY RÓWNOLEGŁE I GEOMETRIA ---
    {
        id: 277,
        category: "Architektury Równoległe",
        text: "Czym jest maszyna (architektura) klasy SISD według Taksonomii Flynna?",
        options: [
            { text: "Single Instruction, Single Data - reprezentuje np. klasyczny, historyczny procesor jedno-rdzeniowy, który przetwarza jeden wątek instrukcji operujący na jednym wektorze danych (architektura Von Neumanna).", isCorrect: true },
            { text: "Oznacza wektoryzację danych na procesorach graficznych (GPU).", isCorrect: false },
            { text: "Jest to układ z podziałem CRCW i współbieżną pamięcią RAM.", isCorrect: false },
            { text: "Maszyna asynchronicznie odczytująca pliki przez wiele kontrolerów.", isCorrect: false }
        ]
    },
    {
        id: 278,
        category: "Architektury Równoległe",
        text: "Z czym wiąże się model EREW w układach PRAM?",
        options: [
            { text: "Jest to model z pamięcią dzieloną (Shared Memory) nie tolerujący zjawisk współbieżnego odczytu i zapisu na ten sam adres w tym samym cyklu.", isCorrect: true },
            { text: "Z dozwolonym współbieżnym czytaniem, ale zablokowanym pisaniem.", isCorrect: false },
            { text: "Jest równoznaczny z algorytmem Huffmana z dopiętym buforem LIFO.", isCorrect: false },
            { text: "Z podziałem procesorów na 0 i 1 gdzie tylko 0 mogą wpisywać dane w RAM.", isCorrect: false }
        ]
    },
    // --- REKURENCJA I KOSZTY - DODATKOWE ---
    {
        id: 279,
        category: "Twierdzenie o Rekurencji Uniwersalnej",
        text: "Czy równanie $T(n) = 2T(n/2) + n \\log n$ rozwiązuje się standardowym wzorem Master Theorem (dla trzech podstawowych przypadków)?",
        options: [
            { text: "Nie, różnica pomiędzy $\\log_b a$ (tu: $\\log_2 2 = 1$) a funkcją $f(n) = n \\log n$ wynosi czynnik $\\log n$, więc problem nie wpisuje się w standardowy przypadek poliwielomianowego rozkładu różnic. (Wymaga zaawansowanych rozszerzeń tw. Master).", isCorrect: true },
            { text: "Tak, daje to rozwiązanie z logiką $\\Theta(n)$.", isCorrect: false },
            { text: "Tak, daje natychmiastowo wynik dla kopca Heapsort w $O(n^2)$.", isCorrect: false },
            { text: "Nie, równanie nie posiada liczby stałej z a w domyśle równej 0.", isCorrect: false }
        ]
    },
    {
        id: 280,
        category: "Analiza Zamortyzowana",
        text: "Jaki jest pesymistyczny (absolutny) koszt pojedynczego wywołania procedury MULTIPOP(S, k) wyciągającej maksymalnie k lub całą resztę elementów z normalnego stosu?",
        options: [
            { text: "Pesymistycznie jest on rzędu $O(n)$, gdzie $n$ to liczba aktualnych wkładów w Stos.", isCorrect: true },
            { text: "Zamortyzowany koszt rzędu $O(n)$, dający potęgę $O(n^2)$.", isCorrect: false },
            { text: "Czas z definicji jest mierzony w $\\Theta(1)$ bo używamy operatora list z tyłu.", isCorrect: false },
            { text: "To wywołanie wymusza zrzut błędów i ma barierę $\\log n$.", isCorrect: false }
        ]
    },

    // --- ALGORYTMY GRAFOWE I BST (DRUGA RUNDA) ---
    {
        id: 281,
        category: "Drzewa BST",
        text: "Ile czasu zajmuje przejście (odwiedzenie) w drzewie Binarnego Drzewa Poszukiwań zawierającym $n$ elementów z użyciem funkcji INORDER, żeby wypisać liczby z posortowaniem?",
        options: [
            { text: "Zajmie to $\\Theta(n)$ bo algorytm odwiedza w całości po jednym razie każdy obecny węzeł na drzewie wypisując klucz na wyjście.", isCorrect: true },
            { text: "Zajmie czas logarytmiczny ograniczony do $O(\\log n)$.", isCorrect: false },
            { text: "Dla niezbalansowanych patyków drzew BST zajmie pesymistycznie czas z ułamkiem rzędu $O(n^2)$.", isCorrect: false },
            { text: "Dla wypisywania na AVL zajmie czas bliski $\\Theta(1)$.", isCorrect: false }
        ]
    },
    {
        id: 282,
        category: "Kopce",
        text: "Gdzie we wbudowanym i uzupełnionym w 100% poprawnie kopcu Max-Heap znajdują się elementy, które stanowią zbiór liści (poziom najgłębszy u spodu)?",
        options: [
            { text: "Są to wartości ukryte pod indeksami tablicy idącymi od $\\lfloor n/2 \\rfloor + 1$ do końca elementu w wektorze przy indeksie $n$.", isCorrect: true },
            { text: "Zawsze na lewym krańcu lewej podgałęzi w $2i$.", isCorrect: false },
            { text: "Indeksy liści zaczynają się u spodu od ułamków pierwszych 1 aż do $\\lfloor n/2 \\rfloor$.", isCorrect: false },
            { text: "Na krańcu pod wartością zapisaną z `Length(A)-1`.", isCorrect: false }
        ]
    },
    {
        id: 283,
        category: "Tablice Haszujące",
        text: "Metoda Haszowania ze współczynnikiem załatwienia ułamków, tzw. Haszowanie przez Metodę Dzielenia (Division Method). Jaka funkcja determinuje położenie węzła z kluczem k pod wymiar $m$?",
        options: [
            { text: "$h(k) = k \\bmod m$", isCorrect: true },
            { text: "$h(k) = m \\bmod k$", isCorrect: false },
            { text: "$h(k) = \\lfloor m / k \\rfloor$", isCorrect: false },
            { text: "$h(k) = (k \\cdot m) \\bmod 1$", isCorrect: false }
        ]
    },
    {
        id: 284,
        category: "Sortowania",
        text: "Kiedy (przy jakich ułożeniach elementów w tabeli wejściowej) w klasycznym Sortowaniu Bąbelkowym można otrzymać najlepszy czas $O(n)$ (zakładając użycie flagi zatrzymującej po przejściu bez jakichkolwiek swapek)?",
        options: [
            { text: "Gdy zbiór podany i wdrożony do wektora startowego jest od zera i już na początku w 100% posortowany i poukładany.", isCorrect: true },
            { text: "Gdy wektor jest zrandomizowany wg schematu Gaussa.", isCorrect: false },
            { text: "Gdy elementy ułożone są malejąco z wykluczeniem 1 połowy.", isCorrect: false },
            { text: "Nigdy, to niemożliwe dla bąbelków z wejścia do ucięcia cyklu z $n^2$.", isCorrect: false }
        ]
    },
    {
        id: 285,
        category: "Grafy: Algorytm Bellmana-Forda",
        text: "W pseudo kodzie z prezentacji, co wywoływane jest i aktualizowane na mapie dla zmiennej powrotów w słowniku `parent[v]` przy przejściu pomyślnie kroku dla relaksacji?",
        options: [
            { text: "`parent[v] = u`, wierzchołek u z którego dobiegła relaksująca niższa ułamkowa wartość dopisuje się jako ojciec by odtworzyć potem najkrótszą drogę.", isCorrect: true },
            { text: "`parent[u] = v` co zamienia pętle drzewa DFS na tablicy od powrotów.", isCorrect: false },
            { text: "Tablica wstawia symbol $\\infty$ dla zapobiegnięcia użycia ujemnej pętli.", isCorrect: false },
            { text: "Ucinany jest wynik funkcji rekursywnie we wskaźnik i zamykany do BFS.", isCorrect: false }
        ]
    },
    {
        id: 286,
        category: "Sortowania",
        text: "Co oznacza, że algorytm sortowania 'Sortowanie Przez Wstawianie' jest sortowaniem algorytmicznym ADAPTACYJNYM?",
        options: [
            { text: "To oznacza że jego czas powielenia operacji zależny jest ściśle od obecnego przed włączeniem zaawansowania ułożenia elementów i skraca w wektorze z czasem dla tablic prawie zrobionych zdejmując cykle do $\\approx O(n)$.", isCorrect: true },
            { text: "Jego struktura opiera się o rzut algorytmu z uczeniem maszynowym.", isCorrect: false },
            { text: "Oznacza, że dynamicznie dodaje tablicę pomocniczą zmniejszając ją o limit $k$.", isCorrect: false },
            { text: "Sortowanie nie wykorzystuje nigdy tablic tylko kolejkę i sterty z min/max.", isCorrect: false }
        ]
    },
    {
        id: 287,
        category: "Drzewa RB",
        text: "Co narzuca i ustala na Drzewach Red-Black (Czerwono Czarnych) zasada powiązania węzłów z kolorem CZERWONYM?",
        options: [
            { text: "Węzły posiadające oznaczenie jako Czerwone (Red) NIGDY w swym ciele nie mogą sąsiadować łącząc ułożenie w prostej z kolejnym czerwonym wierzchołkiem z rzędu jako potomek w rzutach.", isCorrect: true },
            { text: "Wszystkie z nich wymuszone do wejścia w NIL są zawsze trzymane i nadawane na start z kolorem czerwonym i wymuszane na dole ucięcia.", isCorrect: false },
            { text: "Kąt z wierzchołka Czerwonego może rosnąć na prawym boku dając w ostateczności Drzewa ujęte jako AVL dla zbilansowania.", isCorrect: false },
            { text: "Czerwone mogą mieć co najwyżej jednego syna jako zablokowanie do $n \\log n$.", isCorrect: false }
        ]
    },
    {
        id: 294,
        category: "Algorytmy Tekstowe: Boyer-Moore na wprost",
        text: "Jak pętla wywołań w iteracji Boyera Moore odnosi z przeskokiem u Złych Znaków (Bad Character) na indeksie z tyłu okna tekstowego?",
        options: [
            { text: "Po złapaniu braku z tekstem pod okno z literą w T, algorytm wykorzysta wpis by sprawdzić ucieczkę wyrzucając tablicę od najdalszego prawostronnego by uciąg pokrył na oknie literę u tekstu na jej znaku przesuwając cały wymiar z m przed okno.", isCorrect: true },
            { text: "Obcina on za prefiksem z powrotu tablicę dopasowując okno po pierwszej lewej literze.", isCorrect: false },
            { text: "Oblicza wyznacznik wielomianu dla u ujętego na okno by skompensować przesunięcia $d^{m-1}$.", isCorrect: false },
            { text: "Sprawdza dla wzorców skróty z powrotami omija teksty do tyłu przy znaku dobrym bez ujęć na wektor.", isCorrect: false }
        ]
    },
    {
        id: 297,
        category: "Grafy: A*",
        text: "Algorytm A* to w zamyśle przerobienie i rozbudowa Dijkstry z wzięciem i dorzuceniem na tablice priorytetów u dołu przy `f(v)` elementarnej funkcji. Co w A* określa litera h przy f=g+h?",
        options: [
            { text: "Litera h zdefiniowana u węzła w A* i grafie z kosztami do priorytetu jest rzutem, tzw. Funkcją Heurystyczną zgadującą szacowaną resztę z dystansu od wyciągniętego u węzła po ujęty punkt wyjściowy/celujący za u.", isCorrect: true },
            { text: "Zmienna $h$ to wysokość całego AVL w wyciągu drogi z wektorem od z.", isCorrect: false },
            { text: "Współczynnik z Hasha i reszty w bazie okna PRAM u węzłów dodanych po relaksacjach i BFS.", isCorrect: false },
            { text: "Ustala z definicji sumaryczną długość z drogi całej trasy dla minionych wezłów za $g$.", isCorrect: false }
        ]
    },
    {
        id: 308,
        category: "Grafy: Najkrótsze Ścieżki",
        text: "W jaki sposób algorytm Dijkstry korzysta z własności optymalnej podstruktury?",
        options: [
            { text: "Opiera się na fakcie, że każdy podciąg najkrótszej ścieżki jest również najkrótszą ścieżką pomiędzy swoimi punktami końcowymi.", isCorrect: true },
            { text: "Wykorzystuje fakt, że najdłuższa ścieżka w grafie składa się z najdłuższych podścieżek.", isCorrect: false },
            { text: "Wymaga, aby każdy cykl w grafie miał sumę wag równą zero.", isCorrect: false },
            { text: "Dzieli graf na dwa rozłączne podgrafy i rozwiązuje je rekurencyjnie.", isCorrect: false }
        ]
    },
    {
        id: 309,
        category: "Grafy: Floyd-Warshall",
        text: "W jaki sposób algorytm Floyda-Warshalla sygnalizuje obecność cyklu o ujemnej wadze?",
        options: [
            { text: "Po zakończeniu działania algorytmu, przynajmniej jedna wartość na głównej przekątnej macierzy dystansów ($D[i][i]$) będzie ujemna.", isCorrect: true },
            { text: "Zwraca błąd dzielenia przez zero w trzeciej pętli zagnieżdżonej.", isCorrect: false },
            { text: "Pętla algorytmu nigdy się nie kończy, powodując przekroczenie limitu czasu (Timeout).", isCorrect: false },
            { text: "Wyrzuca wyjątek podczas pierwszej iteracji, gdy tylko napotka ujemną wagę krawędzi.", isCorrect: false }
        ]
    },
    {
        id: 310,
        category: "Grafy: Bellman-Ford",
        text: "Dlaczego główna pętla relaksacji w algorytmie Bellmana-Forda wykonuje się dokładnie $|V|-1$ razy?",
        options: [
            { text: "Ponieważ najkrótsza ścieżka prosta (nie zawierająca cykli) w grafie o $|V|$ wierzchołkach może składać się z maksymalnie $|V|-1$ krawędzi.", isCorrect: true },
            { text: "Ponieważ relaksacja $|V|$ krawędzi wymaga $|V|-1$ porównań.", isCorrect: false },
            { text: "Aby dopasować się do wymogów sortowania topologicznego w pętli wewnętrznej.", isCorrect: false },
            { text: "Jest to ograniczenie wynikające z wielkości pamięci podręcznej komputera.", isCorrect: false }
        ]
    },
    {
        id: 311,
        category: "Grafy: Kruskal",
        text: "Który z kroków w algorytmie Kruskala determinuje jego asymptotyczną złożoność czasową?",
        options: [
            { text: "Operacja sortowania wszystkich krawędzi na początku algorytmu, zajmująca $O(E \\log E)$ (co jest równe $O(E \\log V)$).", isCorrect: true },
            { text: "Operacja `Make-Set` wykonywana $|V|$ razy.", isCorrect: false },
            { text: "Operacja `Find-Set` z kompresją ścieżki.", isCorrect: false },
            { text: "Wypisywanie drzewa MST na standardowe wyjście.", isCorrect: false }
        ]
    },
    {
        id: 312,
        category: "Grafy: Algorytm Prima",
        text: "Jaka jest początkowa wartość kluczy (`key[v]`) przypisywana węzłom w kolejce priorytetowej w algorytmie Prima?",
        options: [
            { text: "Dla węzła startowego wynosi 0, a dla wszystkich pozostałych wierzchołków $\\infty$.", isCorrect: true },
            { text: "Wszystkie węzły otrzymują wartość 0.", isCorrect: false },
            { text: "Każdy węzeł otrzymuje wartość równą swojej liczbie sąsiadów (stopniowi).", isCorrect: false },
            { text: "Węzły otrzymują losowe wartości od 1 do $|V|$.", isCorrect: false }
        ]
    },
    {
        id: 313,
        category: "Zbiory Rozłączne (Union-Find)",
        text: "Na czym polega heurystyka łączenia według rangi (Union by rank) w strukturach zbiorów rozłącznych?",
        options: [
            { text: "Podczas operacji `Union`, korzeń mniejszego drzewa (o mniejszej randze) zawsze jest podpinany pod korzeń wyższego drzewa (o większej randze), co zapobiega degeneracji drzewa do listy.", isCorrect: true },
            { text: "Sortuje ona elementy przed dodaniem do zbioru.", isCorrect: false },
            { text: "Ustawia rangę każdego węzła na 1 po jego pierwszym użyciu.", isCorrect: false },
            { text: "Kasuje wskaźniki potomków podczas łączenia, uwalniając pamięć.", isCorrect: false }
        ]
    },
    {
        id: 314,
        category: "Zbiory Rozłączne (Union-Find)",
        text: "Na czym polega heurystyka kompresji ścieżki (Path compression) w strukturze zbiorów rozłącznych?",
        options: [
            { text: "Podczas operacji `Find-Set(x)`, wszystkie węzły na ścieżce od $x$ do korzenia są przepinane tak, aby wskazywały bezpośrednio na korzeń, przyspieszając przyszłe zapytania.", isCorrect: true },
            { text: "Usuwa węzły, które nie są już połączone z korzeniem.", isCorrect: false },
            { text: "Zmniejsza pamięć zajmowaną przez wskaźniki, wykorzystując wskaźniki XOR.", isCorrect: false },
            { text: "Zmienia strukturę drzewa na listę dwukierunkową.", isCorrect: false }
        ]
    },
    {
        id: 315,
        category: "Sieci Przepływowe: Ford-Fulkerson",
        text: "W jaki sposób wyznaczana jest wartość, o którą możemy powiększyć przepływ wzdłuż znalezionej ścieżki powiększającej $p$?",
        options: [
            { text: "Jest to minimum z przepustowości residualnych ($c_f$) wszystkich krawędzi wchodzących w skład tej ścieżki: $c_f(p) = \\min\\{c_f(u,v) : (u,v) \\in p\\}$.", isCorrect: true },
            { text: "Jest to suma przepustowości residualnych wszystkich krawędzi ścieżki.", isCorrect: false },
            { text: "Jest to średnia arytmetyczna przepustowości na ścieżce.", isCorrect: false },
            { text: "Jest to maksymalna wartość przepustowości początkowej krawędzi wychodzącej ze źródła $s$.", isCorrect: false }
        ]
    },
    {
        id: 316,
        category: "Sieci Przepływowe: Przekrój",
        text: "Zgodnie z Twierdzeniem o Maksymalnym Przepływie i Minimalnym Przekroju, kiedy algorytm Forda-Fulkersona kończy swoje działanie?",
        options: [
            { text: "Kiedy w sieci residualnej nie istnieje już żadna ścieżka powiększająca ze źródła $s$ do ujścia $t$.", isCorrect: true },
            { text: "Kiedy przepływ we wszystkich krawędziach osiągnie wartość ich pojemności ($f(u,v) = c(u,v)$).", isCorrect: false },
            { text: "Kiedy wyczerpie się limit iteracji wynoszący $|V| \\cdot |E|$.", isCorrect: false },
            { text: "Gdy w sieci residualnej pojawią się cykle o dodatniej pojemności.", isCorrect: false }
        ]
    },
    {
        id: 317,
        category: "Grafy Dwudzielne",
        text: "W jaki sposób sprowadzamy problem maksymalnego skojarzenia w grafie dwudzielnym do problemu maksymalnego przepływu?",
        options: [
            { text: "Dodajemy wierzchołek źródłowy $s$ i łączymy go krawędziami o pojemności 1 z każdym wierzchołkiem lewego podzbioru, oraz wierzchołek ujścia $t$ z krawędziami o pojemności 1 od każdego wierzchołka prawego podzbioru.", isCorrect: true },
            { text: "Ustawiamy przepustowość każdej krawędzi w grafie na $\\infty$.", isCorrect: false },
            { text: "Usuwamy wszystkie krawędzie powrotne za pomocą DFS.", isCorrect: false },
            { text: "Łączymy wszystkie wierzchołki w cykl Eulera i szukamy przepływu równego 1.", isCorrect: false }
        ]
    },
    {
        id: 318,
        category: "Algorytmy Tekstowe: Rabin-Karp",
        text: "W algorytmie Rabina-Karpa używana jest reguła Hornera. Jaki jest jej cel?",
        options: [
            { text: "Służy do szybkiego przeliczenia wartości liczbowej okna tekstu w czasie stałym $O(1)$ podczas przesuwania okna o jedną pozycję.", isCorrect: true },
            { text: "Gwarantuje, że nie wystąpią fałszywe trafienia (spurious hits).", isCorrect: false },
            { text: "Przesuwa wzorzec do tyłu, jeśli znaki się nie zgadzają.", isCorrect: false },
            { text: "Tworzy tablicę przejść dla automatu skończonego.", isCorrect: false }
        ]
    },
    {
        id: 319,
        category: "Algorytmy Tekstowe: Boyer-Moore",
        text: "W algorytmie Boyera-Moore'a, o ile pozycji należy przesunąć wzorzec po wykryciu niezgodności?",
        options: [
            { text: "Wybiera się większe z przesunięć obliczonych na podstawie heurystyki 'złego znaku' oraz heurystyki 'dobrego sufiksu'.", isCorrect: true },
            { text: "Zawsze przesuwa się wzorzec o stałą wartość równą $\\pi[j]$.", isCorrect: false },
            { text: "Zawsze przesuwa się wzorzec o dokładnie jedną pozycję w prawo.", isCorrect: false },
            { text: "Przesuwa się wzorzec o długość wzorca pomnożoną przez pozycję błędu.", isCorrect: false }
        ]
    },
    {
        id: 320,
        category: "Kodowanie Huffmana",
        text: "Ile razy w głównej pętli algorytmu Huffmana (dla alfabetu o $n$ symbolach) wykonywana jest operacja `Extract-Min` z kolejki priorytetowej?",
        options: [
            { text: "Dokładnie $2(n - 1)$ razy (ponieważ pętla wykonuje się $n-1$ razy, a w każdej iteracji ściągamy 2 elementy).", isCorrect: true },
            { text: "Dokładnie $n$ razy.", isCorrect: false },
            { text: "Dokładnie $\\log_2 n$ razy.", isCorrect: false },
            { text: "Zależy to od rozkładu prawdopodobieństw symboli.", isCorrect: false }
        ]
    },
    {
        id: 321,
        category: "Kompresja: LZW",
        text: "Na jakiej zasadzie dekompresor w algorytmie LZW odbudowuje słownik kodów, mimo że nie otrzymuje go w pliku z danymi?",
        options: [
            { text: "Dekompresor i kompresor używają tego samego deterministycznego algorytmu inicjowanego stałym alfabetem bazowym; dekompresor przewiduje i dopisuje do słownika nowe sekwencje w trakcie odczytywania kolejnych kodów.", isCorrect: true },
            { text: "Słownik musi zostać wcześniej wysłany niezależnym kanałem komunikacyjnym.", isCorrect: false },
            { text: "Kody ASCII w pliku są wystarczające do zbudowania drzewa Huffmana na nowo.", isCorrect: false },
            { text: "Wykorzystuje on zaszytą na końcu pliku specjalną sygnaturę słownikową z EOF.", isCorrect: false }
        ]
    },
    {
        id: 322,
        category: "Analiza Zamortyzowana: Metoda Potencjału",
        text: "Jeżeli po wykonaniu pewnej operacji $i$ różnica potencjału $\\Phi(D_i) - \\Phi(D_{i-1})$ jest dodatnia, co to oznacza dla tej operacji?",
        options: [
            { text: "Zamortyzowany koszt tej operacji przypisany w analizie jest większy niż jej koszt rzeczywisty; operacja ta nakłada \"podatek\", odkładając nadmiar kredytów w systemie na poczet przyszłych, drogich działań.", isCorrect: true },
            { text: "Zamortyzowany koszt jest niższy od rzeczywistego, więc algorytm konsumuje odłożone zyski.", isCorrect: false },
            { text: "Oznacza to, że system za chwilę się zatrzyma z racji awarii Heapify.", isCorrect: false },
            { text: "Algorytm wykonał pesymistyczną pracę $\\Theta(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 323,
        category: "Struktury Danych: Tablice Dynamiczne",
        text: "Przy zmniejszaniu (zwalnianiu) rozmiaru tablicy dynamicznej, by uniknąć zjawiska 'trzepotania' (thrashingu - natychmiastowych ponownych alokacji po przeplocie Push/Pop), przy jakim współczynniku zapełnienia tablica jest zazwyczaj zmniejszana o połowę?",
        options: [
            { text: "Przy współczynniku wypełnienia spadającym do $\\alpha = 1/4$ (zmniejszamy o połowę, co podnosi wypełnienie z powrotem do $1/2$).", isCorrect: true },
            { text: "Zaraz po tym, gdy wskaźnik wypełnienia spadnie do $1/2$.", isCorrect: false },
            { text: "Przy współczynniku wynoszącym dokładnie $0$.", isCorrect: false },
            { text: "Nigdy, tablice dynamiczne obsługują tylko pule pamięci rozszerzalnej.", isCorrect: false }
        ]
    },
    {
        id: 324,
        category: "Sortowanie: Quicksort Hoare",
        text: "Gdzie w tablicy po jednokrotnym wykonaniu procedury `Hoare-Partition(A, p, r)` znajduje się wybrany element osiowy (pivot), jeśli oryginalnie był on np. na pozycji `A[p]`?",
        options: [
            { text: "Może znajdować się w dowolnym miejscu tablicy, w tym poza zwróconym indeksem podziału $q$. Hoare nie gwarantuje ułożenia pivota na ostatecznej pozycji.", isCorrect: true },
            { text: "Dokładnie pod indeksem $q$, dzieląc tablicę idealnie na pół.", isCorrect: false },
            { text: "Na samym końcu podtablicy `A[r]`.", isCorrect: false },
            { text: "Zawsze pozostaje nietknięty na `A[p]`.", isCorrect: false }
        ]
    },
    {
        id: 325,
        category: "Sortowanie: Quicksort Lomuto",
        text: "W implementacji `Lomuto-Partition(A, p, r)`, pivot jest wybierany jako $x = A[r]$. Co gwarantuje pseudokod tuż po zakończeniu głównej pętli i przed instrukcją `return`?",
        options: [
            { text: "Wykonuje `swap(A[i+1], A[r])`, po czym pivot znajduje się dokładnie na pozycji $i+1$, która jest jego ostateczną poprawną pozycją w całkowicie posortowanej tablicy.", isCorrect: true },
            { text: "Wstawia element na pozycję $p$, po czym uruchamia Insertion Sort.", isCorrect: false },
            { text: "Podnosi ramy stosu rekurencji wywołując funkcję `Build-Heap` na podtablicy.", isCorrect: false },
            { text: "Wyrzuca wyjątek StackOverflow jeśli elementy są ułożone asymetrycznie.", isCorrect: false }
        ]
    },
    {
        id: 326,
        category: "Sortowanie: Merge Sort",
        text: "Dlaczego na końcu nowo alokowanych, lewych i prawych tablic pomocniczych w klasycznym pseudokodzie scalania `Merge(A, p, q, r)` z Cormena dodaje się wartość $\\infty$?",
        options: [
            { text: "Działają one jako strażnicy (sentinels), upraszczając kod. Dzięki temu nie trzeba ciągle sprawdzać, czy którakolwiek z tablic pomocniczych się wyczerpała wewnątrz głównej pętli scalającej.", isCorrect: true },
            { text: "Gwarantują stabilność algorytmu w miejscach brzegowych.", isCorrect: false },
            { text: "Ułatwiają wektorową kompresję potokową dla PRAM.", isCorrect: false },
            { text: "Zapobiegają negatywnemu przepływowi w cyklach for.", isCorrect: false }
        ]
    },
    {
        id: 327,
        category: "Sortowanie: Heap Sort",
        text: "Które z twierdzeń w pełni oddaje zaletę algorytmu Heapsort, wyróżniającą go na tle Merge Sorta i Quick Sorta w standardowych zastosowaniach ogólnych?",
        options: [
            { text: "Heapsort jest jedynym spośród nich algorytmem sortującym, który JEDNOCZEŚNIE gwarantuje czas najgorszy $O(n \\log n)$ (czego nie ma Quicksort) ORAZ sortuje w miejscu $O(1)$ dodatkowej pamięci (czego nie ma Merge Sort).", isCorrect: true },
            { text: "Jest jedynym stabilnym algorytmem z czasem $O(n \\log n)$.", isCorrect: false },
            { text: "Dzięki operacjom wektorowym pozwala posortować grafy skierowane (Topologicznie).", isCorrect: false },
            { text: "Działa w czasie oczekiwanym $O(n)$ przez analizę statystyk z medianami.", isCorrect: false }
        ]
    },
    {
        id: 328,
        category: "Kopce Binarne",
        text: "Mając indeks węzła $i = 13$ w kopcu binarnym indeksowanym od $1$, pod jakim indeksem znajduje się jego prawy brat?",
        options: [
            { text: "Węzeł ten nie ma prawego brata, ponieważ jest on lewym dzieckiem węzła $\\lfloor 13/2 \\rfloor = 6$. Jego ewentualny brat znajduje się pod indeksem $2 \\cdot 6 + 1 = 13$, a on sam pod $2 \\cdot 6 = 12$. A nie, węzeł 13 jest PRAWYM dzieckiem węzła 6, więc brat z lewej to 12.", isCorrect: true },
            { text: "Węzeł ten posiada prawego brata pod indeksem 14.", isCorrect: false },
            { text: "Rodzeństwem jest wierzchołek 26.", isCorrect: false },
            { text: "Kopce nie posiadają relacji braterskich.", isCorrect: false }
        ]
    },
    {
        id: 329,
        category: "Sortowanie Liniowe: Counting Sort",
        text: "Czym skutkuje brak pętli idącej 'od tyłu' tablicy `A` (`downto 1`) przy kopiowaniu wyników w Counting Sort i zastąpienie jej pętlą 'od przodu' (`to n`)?",
        options: [
            { text: "Algorytm nadal prawidłowo posortuje liczby co do wartości, ale straci właściwość stabilności (elementy z takimi samymi kluczami zostaną odwrócone względem pozycji oryginalnej).", isCorrect: true },
            { text: "Algorytm wyrzuci błąd indeksowania, przekraczając tablicę wejściową.", isCorrect: false },
            { text: "Algorytm wygeneruje posortowaną listę, ale posortowaną malejąco.", isCorrect: false },
            { text: "Złożoność zliczenia wpadnie w przypadek $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 330,
        category: "Sortowanie Liniowe: Radix Sort",
        text: "Ile przebiegów $d$ musi wykonać sortowanie połówkowe/liczbowe (Radix Sort), jeśli tablica o rozmiarze $n$ ma 32-bitowe zmienne (np. int), a my używamy algorytmu sortowania po bajtach (8 bitów)?",
        options: [
            { text: "Wymaga dokładnie 4 przebiegów, ponieważ $32/8 = 4$.", isCorrect: true },
            { text: "Wymaga 32 przebiegów.", isCorrect: false },
            { text: "Wymaga $\\log_2 32$ przebiegów.", isCorrect: false },
            { text: "Wymaga 256 przebiegów.", isCorrect: false }
        ]
    },
    {
        id: 331,
        category: "Sortowanie Liniowe: Bucket Sort",
        text: "W standardowej implementacji z Cormena, co reprezentują elementy tablicy $B[0 \\dots n-1]$ po zainicjalizowaniu i włożeniu wartości do odpowiednich sekcji?",
        options: [
            { text: "Reprezentują referencje (head) do list jednokierunkowych, trzymających rzutowane, podobne wartości, które później są sortowane za pomocą `Insertion Sort` w ramach każdej małej listy osobno.", isCorrect: true },
            { text: "Są to gotowe drzewa AVL optymalizujące przedziały zmiennoprzecinkowe.", isCorrect: false },
            { text: "Przechowują ostateczne wagi relaksacji z algorytmu Forda-Bellmana.", isCorrect: false },
            { text: "Pobierają element i alokują go jako wektor do szyfrowania PRAM.", isCorrect: false }
        ]
    },
    {
        id: 332,
        category: "Drzewa BST",
        text: "Aby odnaleźć Nastepnika (Successor) w drzewie BST dla elementu, który POSIADA prawe poddrzewo, musimy:",
        options: [
            { text: "Po wejściu w prawe poddrzewo natychmiastowo podążać jak najdalej potrafimy lewymi wskaźnikami, poszukując minimum tego poddrzewa.", isCorrect: true },
            { text: "Podążać prawymi wskaźnikami, aż znajdziemy liść.", isCorrect: false },
            { text: "Cofnąć się w kierunku korzenia przez wskaźniki rodziców `parent[x]` i odnaleźć zakręt.", isCorrect: false },
            { text: "Wykonać procedurę Extrac-Max.", isCorrect: false }
        ]
    },
    {
        id: 333,
        category: "Drzewa BST: Usuwanie",
        text: "Podczas operacji usuwania węzła $z$ z dwojgiem dzieci z drzewa BST, węzeł $y$ (zastępujący go) zostaje wybrany jako następnik. Co możemy zagwarantować o tym następniku?",
        options: [
            { text: "Z pewnością nie ma on lewego dziecka (gdyż inaczej nie byłby następnikiem będącym minimum w prawym poddrzewie). Można go usunąć korzystając z trywialnego przypadku dla elementu z 1 prawym synem lub brakiem dzieci.", isCorrect: true },
            { text: "Węzeł ten na pewno nie posiada w ogóle dzieci (zawsze jest prawym liściem).", isCorrect: false },
            { text: "Następnik jest ojcem prawego syna usuwanego elementu.", isCorrect: false },
            { text: "To wywołuje błąd, następnika wyznacza się z korzenia grafu w trybie pre-order.", isCorrect: false }
        ]
    },
    {
        id: 334,
        category: "Drzewa AVL: Złożone Rotacje",
        text: "Z jakich dokładnych manipulacji strukturą składa się podwójna rotacja Right-Left (RL) wywoływana, gdy prawe poddrzewo jest za wysokie, ale lewe dziecko prawego poddrzewa psuje zbalansowanie?",
        options: [
            { text: "Uznając zepsuty węzeł za $x$, jego prawo za $y$, a węzeł psujący za $w$: wywołujemy `Rotate-Right` na węźle $y$ (dając $w$ na miejsce $y$), a następnie `Rotate-Left` na węźle $x$ (dając $w$ w miejsce korzenia rotacji).", isCorrect: true },
            { text: "Najpierw obracamy na $x$ lewo, a potem w prawo na ojcu.", isCorrect: false },
            { text: "Rotacja to modyfikacja wskaźników ojca i liścia do NULL i nadpisanie $BF=0$.", isCorrect: false },
            { text: "To podwójne odwrócenie kopca w formę listy LIFO.", isCorrect: false }
        ]
    },
    {
        id: 335,
        category: "Drzewa AVL: Przeliczanie BF",
        text: "Jaki jest koszt czasowy wyliczenia wysokości węzła $height(v)$ dla węzła w drzewie AVL zaimplementowanym tak jak w poleconym kodzie, po dokonaniu rotacji?",
        options: [
            { text: "Czas uważa się za $O(1)$, ponieważ węzły w AVL muszą buforować swoją wysokość (zmienna `v.height`). Po rotacji aktualizujemy po prostu `v.height = max(height(v.left), height(v.right)) + 1` dla zaledwie 2 zrotowanych elementów.", isCorrect: true },
            { text: "Wymaga zejścia do samych liści, dając czas $O(\\log n)$ za każdym przeliczeniem po rotacji.", isCorrect: false },
            { text: "Odświeżenie jest możliwe wyłącznie przez ponowne skanowanie Pre-order dając barierę $O(n)$.", isCorrect: false },
            { text: "Czas to $\\infty$, ponieważ drzewo cyklicznie uczy się balansowania BFS.", isCorrect: false }
        ]
    },
    {
        id: 336,
        category: "Drzewa Czerwono-Czarne (RB)",
        text: "Gdy mamy węzeł czerwony w drzewie RB, to z definicji...",
        options: [
            { text: "Wszystkie jego bezpośrednie dzieci muszą być koloru czarnego (lub być czarnymi liśćmi NIL).", isCorrect: true },
            { text: "Musi on mieć co najmniej jedno czerwone dziecko dla zachowania wagi.", isCorrect: false },
            { text: "Ojciec tego czerwonego węzła także musiałby być czerwony.", isCorrect: false },
            { text: "Drzewo jest uszkodzone i wymaga rotacji w stronę zbalansowania $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 337,
        category: "Drzewa Przedziałowe (Interval Trees)",
        text: "Mając szukany przedział $i = [15, 20]$ oraz korzeń, z którym jest porównywany $x = [25, 30]$ wraz z wyliczonym `x.left.max = 22`. Jak zachowa się zapytanie z `Interval-Search(T, i)`?",
        options: [
            { text: "Sprawdzi wpierw pole `x.left.max` $\\ge 15$ ($22 \\ge 15$). Ponieważ warunek zachodzi, zapyta i pobiegnie na pewno do LEWEGO poddrzewa pomimo błędu w korzeniu głównym.", isCorrect: true },
            { text: "Zakończy wynik i rzuci FALSE, bo 25 > 20 i odetnie od prawej wektor.", isCorrect: false },
            { text: "Wybierze prawe poddrzewo bo szukana jest wartość maksimum z wektora.", isCorrect: false },
            { text: "Podzieli się wielowątkowo i pobiegnie w obie gałęzie z PRAM.", isCorrect: false }
        ]
    },
    {
        id: 338,
        category: "Skip Lists",
        text: "Prawdopodobieństwo, z jakim nowo dołączany element awansuje na wyższy poziom (promocja głowy) w Listach Przeskakiwania określane jest często przez $p$. Jaki jest standardowy narzut pamięciowy wskaźników tej struktury?",
        options: [
            { text: "Oczekiwana wielkość każdego z węzłów to $1/(1-p)$. Ponieważ $p$ zazwyczaj równe jest $1/2$, daje to $\\approx 2$ wskaźniki na każdy element – cała nowa wielopoziomowa struktura zużywa ledwie $O(n)$ wskaźników i asymiluje obciążenie O(1) na ramkę.", isCorrect: true },
            { text: "Pamięć ta zawsze wynosi $O(n \\log n)$, ponieważ każdy element musi duplikować ścieżki.", isCorrect: false },
            { text: "Węzeł ten wymaga potężnego przeskoku i pożera $\\Theta(n^2)$ danych wskaźnikowych do podwojenia i podpięcia wejść.", isCorrect: false },
            { text: "Struktury nie mają zrandomizowania i posiadają stale zadeklarowane wejścia wektorów z Radixu z czasem $\\Omega(\\infty)$.", isCorrect: false }
        ]
    },
    {
        id: 339,
        category: "Grafy: Przeszukiwanie w głąb (DFS)",
        text: "Z grafu Skierowanego, oznaczanego wektorem G(V, E) odłączono krawędzie klasyfikując je. Z lematu wiemy, że graf z defincji pozostanie bez-cykliczny (Acykliczny DAG) dopóty, dopóki:",
        options: [
            { text: "Skaner z procedur DFS przeszukujących go i ucinających barwy nie zrzutuje w swoim algorytmie Ani Jednej Krawędzi klasyfikującej się do odłamu Krawędzi Powrotnych (Back Edges).", isCorrect: true },
            { text: "Liczba krawędzi przód i poprzeczna równa się zawsze na stałe potędze drzew binarnego 2.", isCorrect: false },
            { text: "Kolejka FIFO zrzuca do grafu elementy w czasie nie większym niż ułamki i potęgi $\\Theta(\\log V)$.", isCorrect: false },
            { text: "Nie zawiera w całości żadnego z kolorów WHITE dla zrzutów graficznych.", isCorrect: false }
        ]
    },
    {
        id: 340,
        category: "Wstęp do Algorytmiki",
        text: "Co w analizie algorytmów oznacza pojęcie 'złożoność pesymistyczna'?",
        options: [
            { text: "Określa najgorszy z możliwych scenariuszy działania algorytmu dla danych o rozmiarze $n$ (wymaga najwięcej czasu).", isCorrect: true },
            { text: "Jest to minimalny czas, jakiego algorytm potrzebuje do wykonania zadania.", isCorrect: false },
            { text: "Opisuje algorytmy, które zawsze kończą się błędem.", isCorrect: false },
            { text: "Określa średnią ilość pamięci zużywanej przez program.", isCorrect: false }
        ]
    },
    {
        id: 341,
        category: "Złożoność Obliczeniowa",
        text: "Która z poniższych asymptotycznych złożoności czasowych jest NAJLEPSZA (rośnie najwolniej w miarę wzrostu rozmiaru wejścia)?",
        options: [
            { text: "$O(1)$ - złożoność stała.", isCorrect: true },
            { text: "$O(\\log n)$ - złożoność logarytmiczna.", isCorrect: false },
            { text: "$O(n)$ - złożoność liniowa.", isCorrect: false },
            { text: "$O(n^2)$ - złożoność kwadratowa.", isCorrect: false }
        ]
    },
    {
        id: 342,
        category: "Złożoność Obliczeniowa",
        text: "Która z poniższych asymptotycznych złożoności czasowych jest NAJGORSZA (rośnie najszybciej)?",
        options: [
            { text: "$O(n!)$ - złożoność silni.", isCorrect: true },
            { text: "$O(2^n)$ - złożoność wykładnicza.", isCorrect: false },
            { text: "$O(n^3)$ - złożoność sześcienna.", isCorrect: false },
            { text: "$O(n \\log n)$ - złożoność liniowo-logarytmiczna.", isCorrect: false }
        ]
    },
    {
        id: 343,
        category: "Złożoność Obliczeniowa",
        text: "Z czym wiąże się badanie 'złożoności pamięciowej' algorytmu?",
        options: [
            { text: "Z określaniem, ile dodatkowej pamięci RAM (np. w postaci nowych tablic, zmiennych czy buforów) wymaga algorytm do działania.", isCorrect: true },
            { text: "Z liczbą linii kodu źródłowego programu.", isCorrect: false },
            { text: "Z czasem wczytywania programu z dysku twardego.", isCorrect: false },
            { text: "Ze zużyciem procesora mierzonego w gigahercach.", isCorrect: false }
        ]
    },

    // --- PROSTE STRUKTURY LINIOWE ---
    {
        id: 344,
        category: "Proste Struktury Danych",
        text: "Jak brzmi pełne rozwinięcie skrótu LIFO, opisującego działanie Stosu (Stack)?",
        options: [
            { text: "Last In, First Out (Ostatni element dodany na stos jest pierwszym zdjętym ze stosu).", isCorrect: true },
            { text: "Linear Input, Fast Output.", isCorrect: false },
            { text: "Long Integer, Floating Object.", isCorrect: false },
            { text: "Left In, Forward Out.", isCorrect: false }
        ]
    },
    {
        id: 345,
        category: "Proste Struktury Danych",
        text: "Która z popularnych struktur danych opiera się na strategii FIFO (First In, First Out)?",
        options: [
            { text: "Kolejka (Queue).", isCorrect: true },
            { text: "Stos (Stack).", isCorrect: false },
            { text: "Kopiec Binarny (Heap).", isCorrect: false },
            { text: "Drzewo Czerwono-Czarne (RB-Tree).", isCorrect: false }
        ]
    },
    {
        id: 346,
        category: "Proste Struktury Danych: Tablica",
        text: "Jaka jest złożoność czasowa dostępu do $i$-tego elementu w standardowej, jednowymiarowej tablicy (jeśli znamy jej indeks)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 347,
        category: "Proste Struktury Danych: Stos",
        text: "Jak w anglojęzycznej literaturze nazywają się dwie podstawowe operacje odkładania elementu na stos i zdejmowania go ze stosu?",
        options: [
            { text: "Push (odłożenie) oraz Pop (zdjęcie).", isCorrect: true },
            { text: "Insert (odłożenie) oraz Extract (zdjęcie).", isCorrect: false },
            { text: "Enqueue (odłożenie) oraz Dequeue (zdjęcie).", isCorrect: false },
            { text: "Add (odłożenie) oraz Remove (zdjęcie).", isCorrect: false }
        ]
    },
    {
        id: 348,
        category: "Proste Struktury Danych: Listy",
        text: "Z czego zazwyczaj składa się pojedynczy 'węzeł' (node) w jednokierunkowej liście wiązanej?",
        options: [
            { text: "Z przechowywanej w nim wartości (danych) oraz ze wskaźnika prowadzącego do następnego węzła na liście.", isCorrect: true },
            { text: "Z przechowywanej w nim wartości i indeksu tablicy wielowymiarowej.", isCorrect: false },
            { text: "Z samego wskaźnika, ponieważ dane są przechowywane w globalnym rejestrze procesora.", isCorrect: false },
            { text: "Ze wskaźnika do lewego i prawego dziecka.", isCorrect: false }
        ]
    },
    {
        id: 349,
        category: "Proste Struktury Danych: Listy",
        text: "Co różni listę dwukierunkową od listy jednokierunkowej?",
        options: [
            { text: "W liście dwukierunkowej każdy węzeł posiada nie tylko wskaźnik na element następny, ale również wskaźnik na element poprzedni.", isCorrect: true },
            { text: "Lista dwukierunkowa nie używa wskaźników, tylko dwóch oddzielnych tablic.", isCorrect: false },
            { text: "Listę dwukierunkową czyta się zawsze tylko od końca do początku.", isCorrect: false },
            { text: "W liście dwukierunkowej węzły trzymają po dwie różne zmienne.", isCorrect: false }
        ]
    },
    {
        id: 350,
        category: "Proste Struktury Danych",
        text: "Jak oznacza się zazwyczaj brak wskaźnika (np. koniec listy lub brak dziecka w drzewie) w pseudokodach i językach programowania?",
        options: [
            { text: "Specjalną wartością NULL lub NIL.", isCorrect: true },
            { text: "Wartością $-1$.", isCorrect: false },
            { text: "Wartością $\\infty$ (nieskończoność).", isCorrect: false },
            { text: "Znakiem zapytania '?'.", isCorrect: false }
        ]
    },

    // --- PODSTAWY DRZEW ---
    {
        id: 351,
        category: "Drzewa: Podstawy",
        text: "Jak nazywa się jedyny węzeł w drzewie, który nie posiada żadnego rodzica (znajduje się na samym szczycie struktury)?",
        options: [
            { text: "Korzeń (Root).", isCorrect: true },
            { text: "Liść (Leaf).", isCorrect: false },
            { text: "Następnik (Successor).", isCorrect: false },
            { text: "Węzeł Wewnętrzny (Internal Node).", isCorrect: false }
        ]
    },
    {
        id: 352,
        category: "Drzewa: Podstawy",
        text: "Jak zdefiniowany jest 'Liść' (Leaf) w terminologii drzew?",
        options: [
            { text: "Jest to węzeł na dnie struktury, który nie posiada już żadnych potomków (dzieci).", isCorrect: true },
            { text: "Jest to węzeł, który posiada tylko jednego sąsiada w grafie.", isCorrect: false },
            { text: "Jest to nazwa na lewe dziecko każdego korzenia.", isCorrect: false },
            { text: "Jest to dowolny węzeł zabarwiony na czarno.", isCorrect: false }
        ]
    },
    {
        id: 353,
        category: "Drzewa: Podstawy",
        text: "Dlaczego drzewo nazywane jest drzewem 'binarnym'?",
        options: [
            { text: "Ponieważ każdy z jego węzłów może mieć co najwyżej dwoje dzieci (najczęściej nazywanych lewym i prawym).", isCorrect: true },
            { text: "Ponieważ w węzłach można przechowywać tylko wartości binarne (0 i 1).", isCorrect: false },
            { text: "Ponieważ wysokość tego drzewa to zawsze potęga liczby 2.", isCorrect: false },
            { text: "Ponieważ wymaga do działania dokładnie dwóch procesorów PRAM.", isCorrect: false }
        ]
    },
    {
        id: 354,
        category: "Drzewa: BST",
        text: "Jaka jest kluczowa różnica między zwykłym Drzewem Binarnym a Binarnym Drzewem Poszukiwań (BST)?",
        options: [
            { text: "W BST klucze w węzłach ułożone są z konkretną zależnością: elementy mniejsze lądują w lewym poddrzewie, a większe w prawym.", isCorrect: true },
            { text: "Drzewo BST nigdy nie posiada liści.", isCorrect: false },
            { text: "BST używa operacji XOR, by wyznaczać ścieżki.", isCorrect: false },
            { text: "Zwykłe drzewo binarne sortuje dane liniowo, a BST w kwadracie.", isCorrect: false }
        ]
    },
    {
        id: 355,
        category: "Drzewa: Przechodzenie",
        text: "Wymień trzy najpopularniejsze metody przechodzenia (traversal) i wypisywania węzłów w drzewie binarnym.",
        options: [
            { text: "Pre-order, In-order, Post-order.", isCorrect: true },
            { text: "Push-order, Pop-order, Top-order.", isCorrect: false },
            { text: "Max-order, Min-order, Mid-order.", isCorrect: false },
            { text: "Left-shift, Right-shift, Down-shift.", isCorrect: false }
        ]
    },
    {
        id: 356,
        category: "Drzewa: Wysokość i Głębokość",
        text: "Czym jest 'wysokość' całego drzewa?",
        options: [
            { text: "Jest to długość najdłuższej drogi (liczba krawędzi) prowadzącej od korzenia w dół, aż do najgłębiej położonego liścia.", isCorrect: true },
            { text: "Jest to liczba wszystkich węzłów, z których składa się drzewo.", isCorrect: false },
            { text: "Jest to wartość liczbowa przechowywana w korzeniu.", isCorrect: false },
            { text: "Jest to suma wag na wszystkich węzłach.", isCorrect: false }
        ]
    },

    // --- PODSTAWY ALGORYTMÓW SORTUJĄCYCH ---
    {
        id: 357,
        category: "Proste Sortowania",
        text: "Na czym polega najprostsza koncepcja algorytmu Sortowania Bąbelkowego (Bubble Sort)?",
        options: [
            { text: "Na wielokrotnym przechodzeniu przez tablicę, porównywaniu sąsiadujących elementów i zamienianiu ich miejscami, jeśli nie są w poprawnej kolejności.", isCorrect: true },
            { text: "Na dzieleniu tablicy na mniejsze kawałki, aż pozostaną jednoelementowe bloki.", isCorrect: false },
            { text: "Na budowie wirtualnego drzewa poszukiwań ze skanowanej listy.", isCorrect: false },
            { text: "Na losowym przemieszaniu elementów (shuffle), dopóki tablica nie ułoży się losowo w posortowaną.", isCorrect: false }
        ]
    },
    {
        id: 358,
        category: "Proste Sortowania",
        text: "Co oznacza termin, że dany algorytm sortujący działa 'w miejscu' (in-place)?",
        options: [
            { text: "Oznacza to, że algorytm nie potrzebuje żadnych dużych dodatkowych tablic i używa tylko stałej niewielkiej ilości pamięci $O(1)$ do zamiany elementów.", isCorrect: true },
            { text: "Oznacza to, że sortowanie następuje błyskawicznie, bez przenoszenia danych do innej funkcji.", isCorrect: false },
            { text: "Oznacza to, że algorytm wymaga pamięci RAM w rozmiarze dokładnie takim samym jak dysk wejściowy.", isCorrect: false },
            { text: "To pojęcie fizyczne określające uwięzienie instrukcji CPU w jednej lokacji na dysku.", isCorrect: false }
        ]
    },
    {
        id: 359,
        category: "Proste Sortowania",
        text: "Które z podanych sortowań nazywamy 'stabilnym'?",
        options: [
            { text: "Sortowanie jest stabilne, gdy elementy o dokładnie takich samych wartościach zachowują swoją pierwotną kolejność względem siebie w posortowanej tablicy.", isCorrect: true },
            { text: "Stabilne sortowanie to takie, które działa poprawnie, nawet jak nagle braknie prądu w komputerze.", isCorrect: false },
            { text: "Stabilne sortowanie nigdy nie modyfikuje żadnych elementów.", isCorrect: false },
            { text: "Sortowanie stabilne ma zawsze pesymistyczny czas wykonania $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 360,
        category: "Algorytmy Sortowania: Dziel i Zwyciężaj",
        text: "Z jakich podstawowych 3 słów w teorii składa się zasada 'Dziel i Zwyciężaj' (Divide and Conquer)?",
        options: [
            { text: "Dziel (Divide), Zwyciężaj (Conquer), Połącz (Combine).", isCorrect: true },
            { text: "Dodaj (Add), Usuń (Delete), Zapisz (Save).", isCorrect: false },
            { text: "Kopiuj (Copy), Wytnij (Cut), Wklej (Paste).", isCorrect: false },
            { text: "Relaksuj (Relax), Szukaj (Search), Przeskocz (Skip).", isCorrect: false }
        ]
    },
    {
        id: 361,
        category: "Algorytmy Sortowania",
        text: "Co to jest 'Pivot' (element osiowy)?",
        options: [
            { text: "Jest to element wybierany w algorytmie Quicksort służący za punkt odniesienia do podzielenia tablicy na mniejsze i większe od niego połówki.", isCorrect: true },
            { text: "Jest to pierwszy znaleziony element z błędem zapisu w algorytmie naprawczym.", isCorrect: false },
            { text: "To określenie głównego korzenia w drzewach AVL.", isCorrect: false },
            { text: "Jest to suma punktów zdobytych podczas działania programu PRAM.", isCorrect: false }
        ]
    },
    {
        id: 362,
        category: "Algorytmy Wyszukiwania",
        text: "Podstawowy warunek brzegowy do działania Wyszukiwania Binarnego (Binary Search) to:",
        options: [
            { text: "Tablica w której szukamy, musi być uprzednio posortowana.", isCorrect: true },
            { text: "Tablica musi posiadać nieparzystą liczbę elementów.", isCorrect: false },
            { text: "Szukana liczba musi być parzysta.", isCorrect: false },
            { text: "Algorytm musi najpierw wymieszać tablicę używając randomizacji.", isCorrect: false }
        ]
    },
    {
        id: 363,
        category: "Algorytmy Wyszukiwania",
        text: "Jak długo w pesymistycznym przypadku szuka konkretnego elementu tzw. Wyszukiwanie Liniowe (Naiwne) w $n$-elementowej tablicy?",
        options: [
            { text: "Wykonuje do $O(n)$ kroków, ponieważ element może być na samym końcu lub może go w ogóle nie być.", isCorrect: true },
            { text: "Znajduje go w czasie $O(1)$, wyliczając współczynnik haszujący.", isCorrect: false },
            { text: "Szuka go z użyciem ucinania na wskaźnikach dając $O(\\log n)$.", isCorrect: false },
            { text: "Potrzebuje na to $\\Theta(n^2)$ sprawdzeń.", isCorrect: false }
        ]
    },

    // --- PODSTAWY GRAFÓW ---
    {
        id: 364,
        category: "Podstawy Grafów",
        text: "Z jakich zbiorów matematycznych zbudowany jest graf $G = (V, E)$?",
        options: [
            { text: "Ze zbioru wierzchołków (Vertices - $V$) i ze zbioru krawędzi (Edges - $E$).", isCorrect: true },
            { text: "Ze zbioru wektorów (Vectors) i elementów składowych (Elements).", isCorrect: false },
            { text: "Ze zmiennych (Variables) i operacji eulerowskich (Eulers).", isCorrect: false },
            { text: "Ze zbioru wskaźników (Visuals) i zbioru równań (Equations).", isCorrect: false }
        ]
    },
    {
        id: 365,
        category: "Podstawy Grafów",
        text: "Czym różni się Graf Skierowany od Grafu Nieskierowanego?",
        options: [
            { text: "W grafie skierowanym krawędzie mają określony kierunek (zwrot, np. przypominają strzałkę z punktu u do v), w nieskierowanym połączenie działa w obie strony.", isCorrect: true },
            { text: "Graf skierowany może posiadać tylko krawędzie bez wagi (kosztu).", isCorrect: false },
            { text: "Graf nieskierowany musi posiadać cykl Eulera, skierowany nie może.", isCorrect: false },
            { text: "W grafie nieskierowanym wierzchołki układają się w koło.", isCorrect: false }
        ]
    },
    {
        id: 366,
        category: "Podstawy Grafów",
        text: "Co określa termin 'Stopień Wierzchołka' (Degree) w grafie nieskierowanym?",
        options: [
            { text: "Liczbę krawędzi bezpośrednio przylegających do tego wierzchołka.", isCorrect: true },
            { text: "Największą wartość z wag dołączonych do wierzchołka.", isCorrect: false },
            { text: "Długość najdłuższej możliwej trasy przez niego przechodzącej.", isCorrect: false },
            { text: "Kolor jakim pomalował go algorytm DFS.", isCorrect: false }
        ]
    },
    {
        id: 367,
        category: "Podstawy Grafów",
        text: "Co oznacza termin 'Waga Krawędzi' w grafach ważonych?",
        options: [
            { text: "Jest to liczba (koszt, odległość, czas) przypisana do konkretnej krawędzi, mówiąca o trudności lub zasobie potrzebnym do przebycia tej krawędzi.", isCorrect: true },
            { text: "Jest to masa procesora generowana podczas liczenia pętli.", isCorrect: false },
            { text: "Określa stopień zagnieżdżenia struktury Kruskala.", isCorrect: false },
            { text: "Waga ta zawsze opisuje odległość wierzchołka od drzewa BFS.", isCorrect: false }
        ]
    },
    {
        id: 368,
        category: "Podstawy Grafów",
        text: "Co to jest 'Cykl' w grafie?",
        options: [
            { text: "Jest to ciąg sąsiadujących krawędzi, który tworzy zamkniętą ścieżkę – zaczyna się i kończy w dokładnie tym samym wierzchołku.", isCorrect: true },
            { text: "Jest to iteracja pętli p-for we wnętrzu algorytmu grafowego.", isCorrect: false },
            { text: "Rozdzielenie grafu na dwa równe komponenty.", isCorrect: false },
            { text: "Jedna z nazw dla korzenia drzewa rozpinającego.", isCorrect: false }
        ]
    },
    {
        id: 369,
        category: "Podstawy Grafów",
        text: "Graf określany mianem 'Grafu Spójnego' (Connected Graph) to taki, który:",
        options: [
            { text: "Posiada drogę (ścieżkę krawędziową) pomiędzy Każdą możliwą parą wierzchołków leżących na grafie (nie posiada oddzielonych, niepołączonych 'wysp').", isCorrect: true },
            { text: "Zbudowany jest w 100% z krawędzi drzewowych oznaczonych na czerwono.", isCorrect: false },
            { text: "Zawiera wszystkie możliwe relacje na macierzy osiągając stopień $V^2$.", isCorrect: false },
            { text: "Graf Spójny to inna nazwa dla Drzewa z ujemnymi cyklami.", isCorrect: false }
        ]
    },
    {
        id: 370,
        category: "Podstawy Grafów",
        text: "Który algorytm najprościej pozwala zbadać, czy do jakiegoś wierzchołka B da się w ogóle dotrzeć (jest osiągalny) ze startowego wierzchołka A?",
        options: [
            { text: "Przeszukiwanie Wszerz (BFS) lub Przeszukiwanie w Głąb (DFS) uruchomione z węzła A. Jeśli odkryją węzeł B, oznacza to drogę.", isCorrect: true },
            { text: "Algorytm Sortowania Radix działający na stringach.", isCorrect: false },
            { text: "Algorytm znajdywania otoczki wypukłej Grahama.", isCorrect: false },
            { text: "Procedura `Build-Heap` na węzłach wejściowych.", isCorrect: false }
        ]
    },

    // --- PODSTAWY HASZOWANIA I STRUKTUR ZŁOŻONYCH ---
    {
        id: 371,
        category: "Wstęp do Haszowania",
        text: "Czym charakteryzuje się 'Kolizja' w systemie Tablic Mieszających (Hash Tables)?",
        options: [
            { text: "Występuje gdy na dwa całkowicie różne wpisy (klucze), algorytm z funkcji matematycznej wyliczy im i przydzieli dokładnie to samo miejsce/indeks w małej tablicy wyników.", isCorrect: true },
            { text: "Występuje tylko po użyciu usunięcia $NIL$ bez użycia wskaźnika $DELETED$.", isCorrect: false },
            { text: "Oznacza, że program utracił stabilność podczas sortowania klastrów.", isCorrect: false },
            { text: "Zablokowanie dostępu wątku w modelu CRCW PRAM.", isCorrect: false }
        ]
    },
    {
        id: 372,
        category: "Wstęp do Haszowania",
        text: "Do czego służy i jaki ma podstawowy cel 'Funkcja Haszująca'?",
        options: [
            { text: "Jej zadaniem jest przyjęcie niemal dowolnego wejścia (np. tekstu lub dużej liczby) i szybkie, deterministyczne matematyczne przekształcenie go na konkretny, krótki indeks z przedziału tablicy wyjściowej.", isCorrect: true },
            { text: "Rozdziela ona program operacyjny z jednego wątku w tryb wielowątkowy maszyny.", isCorrect: false },
            { text: "Buduje ona strukturalnie pełne Drzewo Czerwono Czarne na wskaźnikach.", isCorrect: false },
            { text: "Ogranicza pętle bąbelkowe przy sortowaniu ułamków do zera.", isCorrect: false }
        ]
    },
    {
        id: 373,
        category: "Podstawy Kopców",
        text: "Kopiec to struktura, którą zazwyczaj ukazuje się w teorii jako narysowane wielkie drzewo binarne. Jaka inna bardzo powszechna i prosta konstrukcja odpowiada fizycznie za przechowywanie tego drzewa w pamięci w kodzie źródłowym?",
        options: [
            { text: "Zwykła płaska jednowymiarowa Tablica, do której elementy układane są bez luk, jeden za drugim, wg rzędu odczytu z poziomów.", isCorrect: true },
            { text: "Wyłącznie podwójnie wiązana lista skokowa (Skip List).", isCorrect: false },
            { text: "Słownik asocjacyjny generowany w formacie JSON.", isCorrect: false },
            { text: "Graf dwudzielny ze wskaźnikami wektorowymi.", isCorrect: false }
        ]
    },

    // --- REKURENCJA ---
    {
        id: 374,
        category: "Podstawy: Rekurencja",
        text: "W programowaniu i algorytmach 'Rekurencją' lub 'Rekursją' nazywa się zjawisko:",
        options: [
            { text: "Kiedy funkcja wywołuje we wnętrzu swego własnego ciała samą siebie z często coraz mniejszym zestawem danych, aż osiągnie warunek zatrzymania bazy.", isCorrect: true },
            { text: "Sytuację gdy sprzętowy procesor podaje sygnał z pamięci na zewnątrz RAM'u z przekroczeniem.", isCorrect: false },
            { text: "Jest to inna definicja na metodę wpisywania zmiennej pod wskaźnik.", isCorrect: false },
            { text: "Użycie zewnętrznych bibliotek dla skompilowania obiektu PRAM.", isCorrect: false }
        ]
    },
    {
        id: 375,
        category: "Podstawy: Rekurencja",
        text: "Z jakiego fundamentalnego powodu z rekurencją i pętlami można w ogóle łatwo stworzyć zjawisko znane z błędu informatycznego jako 'Stack Overflow' (Przepełnienie Stosu)?",
        options: [
            { text: "Jeżeli funkcja nie posiada tzw. punktu bazy lub warunku zatrzymania (stopu), to wywołuje sama siebie w nieskończoność tworząc ramki, które szybko pochłoną wyznaczony mały przydział wolnej pamięci stosowej programu i go załamią.", isCorrect: true },
            { text: "Ponieważ pętle nie mają przypisanej i odgórnie zdefiniowanej struktury klasy LIFO.", isCorrect: false },
            { text: "Odrzucenie elementu i użycie zapisu CRCW niszczy bazę RAM.", isCorrect: false },
            { text: "Z powodu błędu implementacyjnego przy wpisaniu słowa EOF do LZW bez słownika.", isCorrect: false }
        ]
    },

    // --- NAZEWNICTWO ANGLOJĘZYCZNE (PODSTAWOWE) ---
    {
        id: 376,
        category: "Terminologia",
        text: "Do jakiego algorytmu i metody odnosi się najczęściej termin z książek anglojęzycznych 'Greedy Algorithm'?",
        options: [
            { text: "Do Algorytmów Zachłannych – polegających na dokonywaniu wyboru, który w danym ułamku sekundy wydaje się obiecująco najbardziej opłacalny 'tu i teraz' bez spoglądania w odległe prognozy.", isCorrect: true },
            { text: "Do algorytmów operujących i zrzucających zera w siatkach wektorowych bez powrotów.", isCorrect: false },
            { text: "Oznacza algorytmy losowe od Randomized i odwołujące elementy do buforów PRAM.", isCorrect: false },
            { text: "Do algorytmów brutalnej siły poszukujących odpowiedzi po wszystkich elementach w czasie silni.", isCorrect: false }
        ]
    },
    {
        id: 377,
        category: "Terminologia",
        text: "Gdy mowa o operacjach drzewiastych czy słownikowych, co definiuje kluczowe słowo 'Insert'?",
        options: [
            { text: "Odpowiada za czynność umieszczenia (dodania/wstawienia) nowego rekordu lub węzła ze zdefiniowanym kluczem we właściwe miejsce do posiadanej struktury.", isCorrect: true },
            { text: "Odszukanie konkretnego elementu i wydobycie go by skompensować wielkość i rzut struktury.", isCorrect: false },
            { text: "Jest poleceniem wymuszającym kasację i zgaszenie w bazie obiektu z wejścia do u.", isCorrect: false },
            { text: "Rotację wektora i odcięcie ujemnego znaku od błędu po relaksacji wejścia.", isCorrect: false }
        ]
    },

    // --- UZUPEŁNIENIE BAZY ---
    {
        id: 378,
        category: "Wstęp do Algorytmiki",
        text: "Kiedy można powiedzieć, że nowo napisany algorytm komputerowy jest absolutnie 'poprawny'?",
        options: [
            { text: "Gdy zatrzymuje się w końcu w przewidywalnym czasie i podaje bezsprzecznie oczekiwany, bezbłędny dla wszystkich instancji problemu z danych i poprawny matematycznie wynik.", isCorrect: true },
            { text: "Gdy skompiluje się bez błędów typu Syntax Error w wiodącym konsolowym ułożeniu.", isCorrect: false },
            { text: "Gdy udowodniono mu optymalną wartość czasu wielomianowego dla instrukcji pętli PRAM.", isCorrect: false },
            { text: "Gdy pominie sprawdzenie i uruchomi wszystkie obwody na sprzętowych matrycach maszyny.", isCorrect: false }
        ]
    },
    {
        id: 379,
        category: "Wstęp do Złożoności",
        text: "Czego wynikiem we wzorze na złożoności jest tzw. 'Czynnik Dominujący' na przykład w matematycznym równaniu na czas w ujęciu $T(n) = 3n^2 + 5n + 100$?",
        options: [
            { text: "Jest to funkcja członu, która rośnie najszybciej, co oznacza że to element kwadratowy $3n^2$, który w ujęciu asymptotyki Big O determinuje uproszczony czas na formę po zrzuceniu stałych jako złożoność $O(n^2)$.", isCorrect: true },
            { text: "Jest to liczba $100$, ponieważ daje na starcie dla pierwszych wartości pętli najwyższy stały pułap kosztowy do wykonania.", isCorrect: false },
            { text: "Rozkłada się po osi symetrii dając złożoność dla elementu na wektor w rzędzie dając $\\log n$.", isCorrect: false },
            { text: "Brak czynnika pod względem uproszczenia bo wzór nie jest sprowadzalny z racji braku operacji dzielącej na węźle dla u.", isCorrect: false }
        ]
    },
    {
        id: 380,
        category: "Wstęp do Algorytmiki",
        text: "Do weryfikacji i oszacowania działania u algorytmów bez wglądu na specyfikację i siłę szybkiej maszyny (procesora), używamy matematycznego skrótu by pominąć zmienne zewnętrzne dla maszyny. Jak się ten proces formalnie nazywa?",
        options: [
            { text: "Analiza asymptotyczna – upraszcza ona wzory pomijając mało znaczące składowe (np. stałe czasowe czy słabsze wyrazy z ułamka), koncentrując ocenę u skalarności rozrostu danych na $n \\rightarrow \\infty$.", isCorrect: true },
            { text: "Kompilatorowe badanie cykli z użyciem narzędzi diagnostycznych z weryfikacją na żywo w czasie 1 sekundy.", isCorrect: false },
            { text: "Szeregowanie algorytmów pod taksonomię układu wejścia-wyjścia by ustalić przepływy u sprzętu.", isCorrect: false },
            { text: "Dekompozycja na podrzędne grafy z rozrostem dla operacji wektorowych i wymuszeniu zapisu CRCW.", isCorrect: false }
        ]
    },
    {
        id: 381,
        category: "Podstawy Drzew",
        text: "Gdy w Drzewie Binarnym podpinamy na pozycje dzieci mniejsze układy z węzłów i gałęzi to układ odgałęzienia lewego poniżej wybranego wierzchołka nazywamy klasycznie dla form teorii:",
        options: [
            { text: "Lewym poddrzewem.", isCorrect: true },
            { text: "Lewą strukturą liści powrotnych.", isCorrect: false },
            { text: "Węzłowym elementem poprzecznym.", isCorrect: false },
            { text: "Lewym Cyklem.", isCorrect: false }
        ]
    },
    {
        id: 382,
        category: "Podstawy Algorytmiki",
        text: "Kiedy najczęściej decydujemy się użyć struktury reprezentującej Kolejkę do zadań nadzorujących elementy w tle dla pamięci na odkładaniu programu?",
        options: [
            { text: "Kiedy musimy i chcemy podtrzymać sprawiedliwe zadbanie i rozpatrywanie ujęć o równe wdrożenia zasobów z wykluczeniem i trzymaniem porządku 'ten który przyszedł pierwszy otrzyma zasób pierwszy'.", isCorrect: true },
            { text: "Gdy potrzebny ucięty zostaje wynik zapętlenia a zależy nam, by pobrać z bloku do tyłu i otrzymać świeżo dodany błąd najpierw pod LIFO.", isCorrect: false },
            { text: "Z uwagi dla wbudowania pod zrandomizowany układ o elementach u wektora i rzutu wymusza to układ FIFO od końca.", isCorrect: false },
            { text: "Na wymóg wyciagnięcia tylko minimum dla kopców priorytetu bez wag.", isCorrect: false }
        ]
    },
    {
        id: 383,
        category: "Złożoność Obliczeniowa",
        text: "Zapis z asymptoty $\\Theta(1)$ jest nazywany i ułożony w słowniku u algorytmiki czasem...",
        options: [
            { text: "Czasem stałym – program na taką operację poświeci określoną i pewną ilość czasu (kroków obliczeniowych) absolutnie niezależnie od tego ile giga bajtów czy węzłów jest podane z przodu na wejściu w strukturę i u wielkości wejścia $n$.", isCorrect: true },
            { text: "Czasem ułomnym - ponieważ zajmuje dokładnie równe 1 sekundę na obliczenie z wyjścia.", isCorrect: false },
            { text: "Czasem najdłuższym – 1 oznacza nieskończoną stałą operację pętli dając wyjście bez zwrotu pod wynik.", isCorrect: false },
            { text: "Czasem nieliniowym – z racji niepodpięcia z i za wektor do zapętlenia i z pnia od tyłu do u.", isCorrect: false }
        ]
    },
    {
        id: 384,
        category: "Wstęp",
        text: "Pojęcie zwane pseudokodem w algorytmice wykorzystuje się szeroko przed zapisaniem kodu do środowiska. Służy ono:",
        options: [
            { text: "Do luźnego z pominięciem językowych kruczków i reguł zapisu dla ludzkiego, uniwersalnego pokazania koncepcji u logicznego przebiegu zadania, często ułożonego obok ze wstawkami u zdań matematycznych i w języku naturalnym z ułatwieniem by zrozumiał go inny programista przed podjęciem programowania w np. Pythonie czy języku C++.", isCorrect: true },
            { text: "Jest to skompilowany wektor programu we wbudowanych językach z rozszerzeniem dającym uruchomienie po użyciu wejść konsolowych w Windows by usunąć błędy dla rzutów po OS-Tree.", isCorrect: false },
            { text: "Do wyliczania u grafu dla rzutu pod asymetryczne algorytmy o minimalnym przełożeniu w LZW z wbudowaniem pod drzewo binarne dla pamięci bez wejść.", isCorrect: false },
            { text: "Opisywania zadań tekstowych bez operacji i logiki dla ludzi bez umiejętności odczytu z wektorów dla komputera z wyłączeniem po C.", isCorrect: false }
        ]
    },
    {
        id: 385,
        category: "Podstawy Drzew",
        text: "Czym charakteryzuje się tak zwane Drzewo Pełne (Zupełne/Complete Binary Tree) u form od zarania drzew po kopcach z dwójką dzieci?",
        options: [
            { text: "To struktura, u której wszystkie poziomy rzutu i powielenia od korzenia wyłączając być może w 100% sam najniższy poziom dla liści posiadają wszystkie na sztywno ujęte węzły za wektor w wypełnieniu a sam najniższy z u rzutowanych na węzły liści dopięty jest skrajnie pod lewą flance w zapełnianiu.", isCorrect: true },
            { text: "Posiada wyznaczniki do prawego boku i układa po prawej skrajne węzły u roota ignorując lewy podział do wejścia.", isCorrect: false },
            { text: "To wyznacznik tego, że podrzędne elementy u węzła w z rzędem tworzą od razu kopiec dla wektora $O(n)$.", isCorrect: false },
            { text: "Każdy wezeł w drzewie ma przydzielone puste z wskaźników po wejściu dając potęgę d i d u bazy dla NIL.", isCorrect: false }
        ]
    },
    {
        id: 386,
        category: "Podstawy Algorytmiki",
        text: "Na czym opiera się iteracyjne podejście układania kodu pod algorytmy po przeciwnej i równoległej szali od pojęć po algorytmikę z użyciem samej uciętej wejściem z rekurencji?",
        options: [
            { text: "Na wykonaniu pod powtarzalne układem bloki u kroków od użycia pętli z wewnątrz np. bloków pętli 'for' albo od węzła po 'while' powtarzających te zdania i operacje na rzut by wyrobić wejście u stopu i z osiągnięciem zadanego po wejście z tyłu rezultatu po ukończeniu instrukcji.", isCorrect: true },
            { text: "Podejściem w wywołaniu funkcji rekurencyjnych po drzewie dających u wejść rzut stosu na błędy dla wywołania od i bez RAMu.", isCorrect: false },
            { text: "Opiera po wektorach i rzuca o 2 u procesorach dla symetrii pod użycia PRAM i wyciągnięcia operacji po z.", isCorrect: false },
            { text: "Ucinając wyraz na zmiennych i zmuszając do wyjścia z błędem w trybie asymetrycznym po wejściach u z i z.", isCorrect: false }
        ]
    },
    {
        id: 387,
        category: "Wstęp do Algorytmiki",
        text: "Złożoność pamięciowa określona przez notacje o asymetrycznym rzucie z wynikiem $\\Theta(1)$ wskazuje na:",
        options: [
            { text: "Zużycie od dodatkowej po wyjściu pamięci dla RAM dającej gwarantowane bezwarunkowe zablokowanie pod niewielką i z wejściem ustaloną, wyliczoną przed stałą dla u wielkość wektora przydziałowego co nie zmusza z z wejściem do podania większej pamięci przy nawet $n \\rightarrow \\infty$ przy dużym pliku czy grafie.", isCorrect: true },
            { text: "Niestabilne rzuty zużywające całą operacyjną pulę w modelu SISD u Flynna dając braki dla rzutu po logarytmie na $\\log n$.", isCorrect: false },
            { text: "Ograniczone asymetrycznie obciążenie do z wejścia 1 kilobajta u RAM i od 0 na wyciąg pamięci buforowej procesora przy węźle C.", isCorrect: false },
            { text: "Użycie tylko na odrzut w tablicy wynoszącym kwadrat od wektora z wejścia u $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 388,
        category: "Podstawowe Metody Wyszukiwania",
        text: "Z czego wyłania się pod kątem matematycznym z wydajności potężna u wydajności wektorowa korzyść przy wyszukaniu pod Wyszukiwaniem Binarnym, deklasująca Wyszukiwanie naiwne od Liniowych z ułożeń od $O(n)$?",
        options: [
            { text: "Korzyść pochodzi by i wyciąga z odcięcia połowy, od i dającego przedziału badawczego z użyciem warunku od posortowanej pod tablicy dając czas dążący po ułamku na $\\Theta(\\log n)$ operacji za jednym wejściowym elementem, co z n dążącym do dużej wielkości daje skrajnie małą potęgę operacji dając kilkadziesiąt wejść dla milionów rekordów u tablic.", isCorrect: true },
            { text: "Z uwagi za korzystania do przeskakiwania dając potęgę rzędu Radix pod wyciągnięcie i po $O(1)$.", isCorrect: false },
            { text: "Ograniczając wyjście od z użyciem kopca dającego wynik na u z i rzucając pętlę na $O(n \\log n)$.", isCorrect: false },
            { text: "Wyciąga w wyjście u użyciu potężnej operacji po grafie wejściowym na szyny u węzłów BFS.", isCorrect: false }
        ]
    },
    {
        id: 389,
        category: "Analiza zamortyzowana",
        text: "Czym różni się metoda sumaryczna od metody księgowej w analizie zamortyzowanej?",
        options: [
            { text: "Sumaryczna liczy łączny koszt całej sekwencji i dzieli przez liczbę operacji; księgowa przypisuje każdej operacji indywidualny 'koszt zamortyzowany' z odkładaniem nadwyżki na przyszłość.", isCorrect: true },
            { text: "Są to dokładnie te same metody pod różnymi nazwami.", isCorrect: false },
            { text: "Sumaryczna dotyczy tylko struktur drzewiastych.", isCorrect: false },
            { text: "Księgowa wymaga użycia funkcji potencjału $\\Phi$.", isCorrect: false }
        ]
    },
    {
        id: 390,
        category: "Analiza zamortyzowana",
        text: "Na czym opiera się metoda potencjału w analizie zamortyzowanej?",
        options: [
            { text: "Przypisuje całej strukturze danych wartość $\\Phi$ reprezentującą zapas czasu, wykorzystywaną do rozliczenia kosztownych operacji.", isCorrect: true },
            { text: "Sumuje rzeczywiste koszty wszystkich operacji bez żadnych wag.", isCorrect: false },
            { text: "Dotyczy wyłącznie algorytmów rekurencyjnych.", isCorrect: false },
            { text: "Wymaga znajomości rozkładu prawdopodobieństwa danych wejściowych.", isCorrect: false }
        ]
    },
    {
        id: 391,
        category: "Analiza zamortyzowana",
        text: "Jaki jest zamortyzowany koszt inkrementacji $k$-bitowego licznika binarnego metodą księgową?",
        options: [
            { text: "$O(1)$ — płacimy z góry za zmianę bitu z 0 na 1, co pokrywa późniejszą zmianę z 1 na 0.", isCorrect: true },
            { text: "$O(k)$ zawsze, niezależnie od metody analizy.", isCorrect: false },
            { text: "$O(\\log k)$", isCorrect: false },
            { text: "$O(2^k)$", isCorrect: false }
        ]
    },
    {
        id: 392,
        category: "Haszowanie: podstawy",
        text: "Na czym polega adresowanie bezpośrednie (direct addressing)?",
        options: [
            { text: "Klucz jest bezpośrednio używany jako indeks tablicy, np. `A[k]`.", isCorrect: true },
            { text: "Klucz jest najpierw haszowany, a potem szukane jest wolne miejsce.", isCorrect: false },
            { text: "Wszystkie elementy trafiają do jednej listy wiązanej.", isCorrect: false },
            { text: "Wymaga zastosowania dwóch niezależnych funkcji haszujących.", isCorrect: false }
        ]
    },
    {
        id: 393,
        category: "Haszowanie: podstawy",
        text: "Jaką cechę powinna mieć dobra funkcja haszująca?",
        options: [
            { text: "Powinna możliwie równomiernie rozpraszać klucze po całej tablicy.", isCorrect: true },
            { text: "Powinna zawsze zwracać ten sam indeks dla różnych kluczy.", isCorrect: false },
            { text: "Powinna być jak najbardziej skomplikowana obliczeniowo.", isCorrect: false },
            { text: "Powinna zależeć wyłącznie od rozmiaru tablicy, nie od klucza.", isCorrect: false }
        ]
    },
    {
        id: 394,
        category: "Haszowanie: perfect hashing",
        text: "Czym charakteryzuje się doskonała funkcja haszująca (perfect hashing)?",
        options: [
            { text: "Nie generuje żadnych kolizji dla danego, ustalonego zbioru kluczy.", isCorrect: true },
            { text: "Działa szybciej niż zwykłe haszowanie dzięki losowości.", isCorrect: false },
            { text: "Wymaga tablicy o rozmiarze mniejszym niż liczba kluczy.", isCorrect: false },
            { text: "Jest stosowana wyłącznie przy adresowaniu otwartym.", isCorrect: false }
        ]
    },
    {
        id: 395,
        category: "Haszowanie: kolizje",
        text: "Czym jest kolizja w tablicy haszującej?",
        options: [
            { text: "Sytuacją, gdy dwa różne klucze otrzymują ten sam indeks (hash).", isCorrect: true },
            { text: "Próbą wstawienia elementu do pełnej tablicy.", isCorrect: false },
            { text: "Błędem obliczenia rozmiaru tablicy.", isCorrect: false },
            { text: "Usunięciem nieistniejącego elementu.", isCorrect: false }
        ]
    },
    {
        id: 396,
        category: "Haszowanie: chaining",
        text: "Jak metoda łańcuchowa (chaining) rozwiązuje kolizje?",
        options: [
            { text: "Każda komórka tablicy przechowuje listę wiązaną wszystkich elementów zahaszowanych do tego indeksu.", isCorrect: true },
            { text: "Szuka kolejnej wolnej komórki w tablicy.", isCorrect: false },
            { text: "Nadpisuje istniejący element nowym.", isCorrect: false },
            { text: "Powiększa tablicę natychmiast po kolizji.", isCorrect: false }
        ]
    },
    {
        id: 397,
        category: "Haszowanie: adresowanie liniowe",
        text: "Jak wygląda ciąg próbkowania przy adresowaniu liniowym (linear probing)?",
        options: [
            { text: "$h(k,i) = (h'(k) + i) \\bmod m$ — krok o +1 przy każdej kolejnej próbie.", isCorrect: true },
            { text: "$h(k,i) = (h'(k) + i^2) \\bmod m$", isCorrect: false },
            { text: "$h(k,i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$", isCorrect: false },
            { text: "$h(k,i) = h'(k) \\bmod i$", isCorrect: false }
        ]
    },
    {
        id: 398,
        category: "Haszowanie: adresowanie kwadratowe",
        text: "Jak wygląda ciąg próbkowania przy adresowaniu kwadratowym (quadratic probing)?",
        options: [
            { text: "$h(k,i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$", isCorrect: true },
            { text: "$h(k,i) = (h'(k) + i) \\bmod m$", isCorrect: false },
            { text: "$h(k,i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$", isCorrect: false },
            { text: "$h(k,i) = h'(k) \\cdot i \\bmod m$", isCorrect: false }
        ]
    },
    {
        id: 399,
        category: "Haszowanie: podwójne haszowanie",
        text: "Na czym polega podwójne haszowanie (double hashing)?",
        options: [
            { text: "Krok próbkowania wyznaczany jest przez drugą, niezależną funkcję haszującą $h_2(k)$.", isCorrect: true },
            { text: "Element jest haszowany dwukrotnie tą samą funkcją.", isCorrect: false },
            { text: "Wykorzystuje dwie tablice o tym samym rozmiarze.", isCorrect: false },
            { text: "Jest odmianą metody łańcuchowej.", isCorrect: false }
        ]
    },
    {
        id: 400,
        category: "Haszowanie: clustering",
        text: "Czym jest zjawisko clusteringu (grupowania) przy adresowaniu otwartym?",
        options: [
            { text: "Zbijaniem się zajętych komórek w długie ciągi, co wydłuża czas wyszukiwania.", isCorrect: true },
            { text: "Równomiernym rozproszeniem kluczy po tablicy.", isCorrect: false },
            { text: "Błędem przepełnienia tablicy.", isCorrect: false },
            { text: "Zjawiskiem występującym wyłącznie w metodzie łańcuchowej.", isCorrect: false }
        ]
    },
    {
        id: 401,
        category: "Haszowanie: load factor",
        text: "Jak definiuje się współczynnik wypełnienia (load factor) $\\alpha$ dla tablicy o rozmiarze $m$ z $n$ elementami?",
        options: [
            { text: "$\\alpha = n/m$", isCorrect: true },
            { text: "$\\alpha = m/n$", isCorrect: false },
            { text: "$\\alpha = n-m$", isCorrect: false },
            { text: "$\\alpha = n \\cdot m$", isCorrect: false }
        ]
    },
    {
        id: 402,
        category: "Haszowanie: złożoność",
        text: "Jaka jest przeciętna i pesymistyczna złożoność wyszukiwania w tablicy haszującej z metodą łańcuchową?",
        options: [
            { text: "Średnio $O(1)$, pesymistycznie $O(n)$ (wszystkie klucze w jednym łańcuchu).", isCorrect: true },
            { text: "Zawsze $O(1)$, niezależnie od danych.", isCorrect: false },
            { text: "Średnio $O(\\log n)$, pesymistycznie $O(n)$.", isCorrect: false },
            { text: "Zawsze $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 403,
        category: "Drzewa BST: usuwanie",
        text: "Jak usuwa się węzeł, który posiada dwoje dzieci (przypadek 3)?",
        options: [
            { text: "Znajduje się jego następnika (lub poprzednika), podmienia z usuwanym węzłem, a następnie usuwa go z nowej pozycji.", isCorrect: true },
            { text: "Usuwa się go bezpośrednio i podłącza oba poddrzewa do dziadka.", isCorrect: false },
            { text: "Zgłasza się błąd — węzły z dwojgiem dzieci nie mogą być usuwane.", isCorrect: false },
            { text: "Zamienia się cały korzeń drzewa.", isCorrect: false }
        ]
    },
    {
        id: 404,
        category: "Drzewa BST: usuwanie",
        text: "Gdzie zawsze znajduje się następnik węzła (przy usuwaniu z dwojgiem dzieci)?",
        options: [
            { text: "Jest to minimum w prawym poddrzewie usuwanego węzła.", isCorrect: true },
            { text: "Jest to maksimum w lewym poddrzewie.", isCorrect: false },
            { text: "Jest to rodzic usuwanego węzła.", isCorrect: false },
            { text: "Jest to korzeń całego drzewa.", isCorrect: false }
        ]
    },
    {
        id: 405,
        category: "Drzewa RB",
        text: "Które z poniższych są własnościami drzewa czerwono-czarnego?",
        options: [
            { text: "Każdy węzeł jest czerwony lub czarny.", isCorrect: true },
            { text: "Korzeń jest zawsze czarny.", isCorrect: true },
            { text: "Czerwony węzeł nie może mieć czerwonego dziecka.", isCorrect: true },
            { text: "Każde poddrzewo musi mieć tę samą wysokość.", isCorrect: false }
        ]
    },
    {
        id: 406,
        category: "Drzewa RB",
        text: "Ile maksymalnie rotacji wymaga operacja wstawienia do drzewa RB (nie licząc przemalowań)?",
        options: [
            { text: "Co najwyżej 2.", isCorrect: true },
            { text: "$O(\\log n)$.", isCorrect: false },
            { text: "Zawsze dokładnie 1.", isCorrect: false },
            { text: "Zależy liniowo od liczby węzłów.", isCorrect: false }
        ]
    },
    {
        id: 407,
        category: "Drzewa RB",
        text: "Czym jest czarna wysokość (black-height) węzła w drzewie RB?",
        options: [
            { text: "Liczbą czarnych węzłów na ścieżce od tego węzła do dowolnego liścia NIL, bez liczenia samego węzła.", isCorrect: true },
            { text: "Sumą wszystkich węzłów czarnych w drzewie.", isCorrect: false },
            { text: "Różnicą liczby węzłów czerwonych i czarnych.", isCorrect: false },
            { text: "Głębokością drzewa liczoną w bitach.", isCorrect: false }
        ]
    },
    {
        id: 408,
        category: "Drzewa RB",
        text: "Jaka jest gwarantowana wysokość drzewa RB z $n$ węzłami wewnętrznymi?",
        options: [
            { text: "Co najwyżej $2\\log_2(n+1)$.", isCorrect: true },
            { text: "Dokładnie $\\log_2 n$.", isCorrect: false },
            { text: "Co najwyżej $n$.", isCorrect: false },
            { text: "Dokładnie $n-1$.", isCorrect: false }
        ]
    },
    {
        id: 409,
        category: "Drzewa przedziałowe",
        text: "Co reprezentuje dodatkowy atrybut `max` w węźle drzewa przedziałowego?",
        options: [
            { text: "Największą wartość górnego krańca przedziału spośród wszystkich przedziałów w poddrzewie.", isCorrect: true },
            { text: "Liczbę przedziałów w poddrzewie.", isCorrect: false },
            { text: "Najmniejszy dolny kraniec przedziału w poddrzewie.", isCorrect: false },
            { text: "Wysokość poddrzewa.", isCorrect: false }
        ]
    },
    {
        id: 410,
        category: "Drzewa przedziałowe",
        text: "Co dzieje się z atrybutem `max` podczas rotacji w drzewie przedziałowym?",
        options: [
            { text: "Musi zostać przeliczony dla obu zaangażowanych w rotację węzłów — w czasie $O(1)$.", isCorrect: true },
            { text: "Rotacje są zabronione w drzewach przedziałowych.", isCorrect: false },
            { text: "Wymaga przeliczenia całego drzewa od nowa.", isCorrect: false },
            { text: "Atrybut `max` nie zmienia się nigdy przy rotacji.", isCorrect: false }
        ]
    },
    {
        id: 411,
        category: "Drzewa przedziałowe",
        text: "Kiedy `Interval-Search(T, i)` przechodzi do prawego poddrzewa?",
        options: [
            { text: "Gdy lewe poddrzewo jest puste lub jego `max` jest mniejsze niż dolny kraniec szukanego przedziału `i.low`.", isCorrect: true },
            { text: "Zawsze, niezależnie od wartości `max`.", isCorrect: false },
            { text: "Gdy przedział `i` jest pusty.", isCorrect: false },
            { text: "Gdy korzeń jest kolorem czerwonym.", isCorrect: false }
        ]
    },
    {
        id: 412,
        category: "Statystyki pozycyjne (OST)",
        text: "Co przechowuje dodatkowo każdy węzeł w drzewie statystyk pozycyjnych (OS-Tree)?",
        options: [
            { text: "Atrybut `size` — liczbę węzłów w poddrzewie, włączając sam węzeł.", isCorrect: true },
            { text: "Atrybut `max` jak w drzewie przedziałowym.", isCorrect: false },
            { text: "Atrybut `hash` dla szybszego dostępu.", isCorrect: false },
            { text: "Atrybut `color` jak w RB-tree, niezależny od koloru węzła.", isCorrect: false }
        ]
    },
    {
        id: 413,
        category: "Statystyki pozycyjne (OST)",
        text: "Jaka jest złożoność operacji OS-Select w zbalansowanym drzewie OS-Tree?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 414,
        category: "Statystyki pozycyjne (OST)",
        text: "Co się dzieje z atrybutem `size` podczas rotacji w drzewie OS-Tree?",
        options: [
            { text: "Musi zostać zaktualizowany dla dwóch węzłów biorących udział w rotacji, w czasie $O(1)$.", isCorrect: true },
            { text: "Nie zmienia się nigdy podczas rotacji.", isCorrect: false },
            { text: "Wymaga przejścia całego poddrzewa in-order.", isCorrect: false },
            { text: "Jest liczony od nowa dla całego drzewa.", isCorrect: false }
        ]
    },
    {
        id: 415,
        category: "Algorytm magicznych piątek",
        text: "Na czym polega algorytm 'magicznych piątek' (median of medians)?",
        options: [
            { text: "Dzieli dane na grupy po 5 elementów, znajduje medianę każdej grupy, a następnie rekurencyjnie wyznacza medianę z tych median jako pivot.", isCorrect: true },
            { text: "Losuje pivot z pięciu losowych elementów.", isCorrect: false },
            { text: "Sortuje dane w grupach po 5 elementów Insertion Sortem.", isCorrect: false },
            { text: "Odrzuca 5 skrajnych elementów przed selekcją.", isCorrect: false }
        ]
    },
    {
        id: 416,
        category: "Algorytm magicznych piątek",
        text: "Jaki jest cel algorytmu median of medians w kontekście problemu selekcji?",
        options: [
            { text: "Gwarantuje pesymistyczny czas liniowy $O(n)$ w przeciwieństwie do Quickselect, który ma pesymistycznie $O(n^2)$.", isCorrect: true },
            { text: "Przyspiesza sortowanie do $O(n)$.", isCorrect: false },
            { text: "Redukuje pamięć potrzebną do selekcji do $O(1)$.", isCorrect: false },
            { text: "Eliminuje potrzebę porównywania elementów.", isCorrect: false }
        ]
    },
    {
        id: 417,
        category: "Skip listy",
        text: "Jakim zastępstwem dla zbalansowanych drzew BST są Skip Listy?",
        options: [
            { text: "Probabilistycznym — opartym na listach wielopoziomowych z losowymi skokami, dającym oczekiwany czas $O(\\log n)$.", isCorrect: true },
            { text: "Deterministycznym, gwarantującym zawsze $O(\\log n)$ w najgorszym przypadku.", isCorrect: false },
            { text: "Wyłącznie do przechowywania liczb całkowitych.", isCorrect: false },
            { text: "Strukturą wymagającą rotacji jak AVL.", isCorrect: false }
        ]
    },
    {
        id: 418,
        category: "Drzewo Trie",
        text: "Do czego służy drzewo Trie (drzewo przedrostkowe)?",
        options: [
            { text: "Do efektywnego przechowywania i wyszukiwania ciągów znaków (np. słów w słowniku) na podstawie wspólnych przedrostków.", isCorrect: true },
            { text: "Do wyznaczania najkrótszych ścieżek w grafie.", isCorrect: false },
            { text: "Do sortowania liczb w czasie liniowym.", isCorrect: false },
            { text: "Do implementacji kolejki priorytetowej.", isCorrect: false }
        ]
    },
    {
        id: 419,
        category: "Drzewo Trie",
        text: "Od czego zależy złożoność wyszukiwania słowa w drzewie Trie?",
        options: [
            { text: "Od długości szukanego słowa, a nie od liczby przechowywanych słów.", isCorrect: true },
            { text: "Od logarytmu liczby wszystkich słów w słowniku.", isCorrect: false },
            { text: "Zawsze wynosi $O(1)$.", isCorrect: false },
            { text: "Od kwadratu długości słowa.", isCorrect: false }
        ]
    },
    {
        id: 420,
        category: "Drzewo Trie",
        text: "Co reprezentuje każda krawędź w drzewie Trie?",
        options: [
            { text: "Pojedynczy znak (literę) alfabetu.", isCorrect: true },
            { text: "Całe słowo.", isCorrect: false },
            { text: "Wagę połączenia między węzłami.", isCorrect: false },
            { text: "Indeks w tablicy haszującej.", isCorrect: false }
        ]
    },
    {
        id: 421,
        category: "Grafy: klasyfikacja krawędzi DFS",
        text: "Jakie cztery typy krawędzi wyróżnia klasyfikacja DFS?",
        options: [
            { text: "Drzewowe, powrotne, w przód i poprzeczne.", isCorrect: true },
            { text: "Dodatnie, ujemne, zerowe i nieskończone.", isCorrect: false },
            { text: "Wejściowe, wyjściowe, cykliczne i acykliczne.", isCorrect: false },
            { text: "Czarne, białe, szare i czerwone.", isCorrect: false }
        ]
    },
    {
        id: 422,
        category: "Grafy: klasyfikacja krawędzi DFS",
        text: "Jaka krawędź w grafie skierowanym świadczy o istnieniu cyklu?",
        options: [
            { text: "Krawędź powrotna (back edge).", isCorrect: true },
            { text: "Krawędź drzewowa.", isCorrect: false },
            { text: "Krawędź poprzeczna.", isCorrect: false },
            { text: "Krawędź w przód.", isCorrect: false }
        ]
    },
    {
        id: 423,
        category: "Sortowanie topologiczne",
        text: "Jak wyznacza się porządek topologiczny wierzchołków na podstawie DFS?",
        options: [
            { text: "Odwrotna kolejność czasu zakończenia (reverse postorder).", isCorrect: true },
            { text: "Rosnąca kolejność czasu odkrycia.", isCorrect: false },
            { text: "Kolejność zgodna z BFS.", isCorrect: false },
            { text: "Kolejność malejąca stopnia wierzchołka.", isCorrect: false }
        ]
    },
    {
        id: 424,
        category: "Sortowanie topologiczne",
        text: "Na jakim typie grafu wykonuje się sortowanie topologiczne?",
        options: [
            { text: "Na Skierowanym Grafie Acyklicznym (DAG).", isCorrect: true },
            { text: "Na dowolnym grafie nieskierowanym.", isCorrect: false },
            { text: "Na grafie z cyklami dodatnimi.", isCorrect: false },
            { text: "Wyłącznie na drzewach binarnych.", isCorrect: false }
        ]
    },
    {
        id: 425,
        category: "Algorytm Dijkstry",
        text: "Jakiego typu wag wymaga algorytm Dijkstry, by działał poprawnie?",
        options: [
            { text: "Wyłącznie nieujemnych.", isCorrect: true },
            { text: "Dowolnych, w tym ujemnych, o ile nie ma ujemnych cykli.", isCorrect: false },
            { text: "Wyłącznie całkowitoliczbowych.", isCorrect: false },
            { text: "Dowolnych, nawet z ujemnymi cyklami.", isCorrect: false }
        ]
    },
    {
        id: 426,
        category: "Algorytm Dijkstry",
        text: "Jaka jest złożoność Dijkstry przy implementacji z kopcem Fibonacciego?",
        options: [
            { text: "$O(V \\log V + E)$", isCorrect: true },
            { text: "$O(V^2)$ zawsze.", isCorrect: false },
            { text: "$O(VE)$", isCorrect: false },
            { text: "$O(E \\log E)$", isCorrect: false }
        ]
    },
    {
        id: 427,
        category: "Algorytm Forda-Bellmana",
        text: "Ile razy relaksowane są wszystkie krawędzie w głównej pętli algorytmu Forda-Bellmana?",
        options: [
            { text: "$|V|-1$ razy.", isCorrect: true },
            { text: "$|E|$ razy.", isCorrect: false },
            { text: "$|V|$ razy.", isCorrect: false },
            { text: "Dokładnie raz.", isCorrect: false }
        ]
    },
    {
        id: 428,
        category: "Algorytm Forda-Bellmana",
        text: "Jaka jest przewaga Forda-Bellmana nad Dijkstrą?",
        options: [
            { text: "Obsługuje ujemne wagi krawędzi (bez ujemnych cykli osiągalnych ze źródła).", isCorrect: true },
            { text: "Ma niższą złożoność czasową.", isCorrect: false },
            { text: "Nie wymaga inicjalizacji dystansów.", isCorrect: false },
            { text: "Działa wyłącznie na grafach nieważonych.", isCorrect: false }
        ]
    },
    {
        id: 429,
        category: "Algorytm Warshalla-Floyda",
        text: "Jaki problem rozwiązuje algorytm Warshalla-Floyda?",
        options: [
            { text: "Najkrótsze ścieżki między wszystkimi parami wierzchołków (APSP).", isCorrect: true },
            { text: "Minimalne drzewo rozpinające.", isCorrect: false },
            { text: "Maksymalny przepływ w sieci.", isCorrect: false },
            { text: "Sortowanie topologiczne.", isCorrect: false }
        ]
    },
    {
        id: 430,
        category: "Algorytm Warshalla-Floyda",
        text: "Jaka jest złożoność czasowa Warshalla-Floyda?",
        options: [
            { text: "$\\Theta(V^3)$", isCorrect: true },
            { text: "$\\Theta(V^2)$", isCorrect: false },
            { text: "$\\Theta(V \\log V)$", isCorrect: false },
            { text: "$\\Theta(E \\log V)$", isCorrect: false }
        ]
    },
    {
        id: 431,
        category: "Sieci przepływowe",
        text: "Do czego służy algorytm Forda-Fulkersona?",
        options: [
            { text: "Do wyznaczania maksymalnego przepływu w sieci przepływowej.", isCorrect: true },
            { text: "Do wyznaczania minimalnego drzewa rozpinającego.", isCorrect: false },
            { text: "Do sortowania topologicznego DAG.", isCorrect: false },
            { text: "Do wyznaczania najkrótszej ścieżki w grafie ujemnym.", isCorrect: false }
        ]
    },
    {
        id: 432,
        category: "Grafy dwudzielne: maksymalne skojarzenie",
        text: "Czym jest maksymalne skojarzenie (maximum matching) w grafie dwudzielnym?",
        options: [
            { text: "Możliwie największym zbiorem krawędzi, w którym żadne dwie nie dzielą wspólnego wierzchołka.", isCorrect: true },
            { text: "Zbiorem wszystkich krawędzi grafu.", isCorrect: false },
            { text: "Najkrótszą ścieżką łączącą oba podzbiory wierzchołków.", isCorrect: false },
            { text: "Drzewem rozpinającym o minimalnej wadze.", isCorrect: false }
        ]
    },
    {
        id: 433,
        category: "Grafy dwudzielne: skojarzenia i przepływ",
        text: "Jak sprowadza się problem maksymalnego skojarzenia w grafie dwudzielnym do problemu maksymalnego przepływu?",
        options: [
            { text: "Dodaje się super-źródło połączone z lewym zbiorem wierzchołków i super-ujście połączone z prawym zbiorem, każda nowa krawędź o pojemności 1, a oryginalne krawędzie też dostają pojemność 1.", isCorrect: true },
            { text: "Ustawia się wszystkie wagi krawędzi na $\\infty$.", isCorrect: false },
            { text: "Usuwa się wszystkie krawędzie powrotne z grafu.", isCorrect: false },
            { text: "Zamienia się graf dwudzielny na drzewo binarne.", isCorrect: false }
        ]
    },
    {
        id: 434,
        category: "Grafy dwudzielne: skojarzenia i przepływ",
        text: "Jaka jest zależność między rozmiarem maksymalnego skojarzenia a wartością maksymalnego przepływu w sprowadzonej sieci (super-źródło/super-ujście)?",
        options: [
            { text: "Rozmiar maksymalnego skojarzenia jest dokładnie równy wartości maksymalnego przepływu w tej sieci.", isCorrect: true },
            { text: "Skojarzenie jest zawsze dwa razy większe niż przepływ.", isCorrect: false },
            { text: "Nie ma między nimi żadnej zależności.", isCorrect: false },
            { text: "Skojarzenie jest zawsze mniejsze niż przepływ o 1.", isCorrect: false }
        ]
    },
    {
        id: 435,
        category: "Grafy dwudzielne: minimalne pokrycie wierzchołkowe",
        text: "Czym jest minimalne pokrycie wierzchołkowe (minimum vertex cover) grafu?",
        options: [
            { text: "Najmniejszym zbiorem wierzchołków, takim że każda krawędź grafu ma co najmniej jeden koniec w tym zbiorze.", isCorrect: true },
            { text: "Największym zbiorem wierzchołków niepołączonych żadną krawędzią.", isCorrect: false },
            { text: "Zbiorem wszystkich wierzchołków o stopniu większym niż 1.", isCorrect: false },
            { text: "Zbiorem krawędzi tworzących drzewo rozpinające.", isCorrect: false }
        ]
    },
    {
        id: 436,
        category: "Grafy dwudzielne: Twierdzenie Königa",
        text: "Co mówi Twierdzenie Königa dla grafów dwudzielnych?",
        options: [
            { text: "Rozmiar maksymalnego skojarzenia jest równy rozmiarowi minimalnego pokrycia wierzchołkowego.", isCorrect: true },
            { text: "Każdy graf dwudzielny posiada cykl Hamiltona.", isCorrect: false },
            { text: "Minimalne pokrycie wierzchołkowe jest zawsze większe niż maksymalne skojarzenie.", isCorrect: false },
            { text: "Dotyczy wyłącznie grafów acyklicznych.", isCorrect: false }
        ]
    },
    {
        id: 437,
        category: "Algorytmy tekstowe: podstawy",
        text: "Jaka jest złożoność naiwnego algorytmu wyszukiwania wzorca o długości $m$ w tekście o długości $n$?",
        options: [
            { text: "$O((n-m+1)\\cdot m)$", isCorrect: true },
            { text: "$O(n+m)$", isCorrect: false },
            { text: "$O(n \\log m)$", isCorrect: false },
            { text: "$O(m^2)$", isCorrect: false }
        ]
    },
    {
        id: 438,
        category: "Algorytmy tekstowe: podstawy",
        text: "Który algorytm wyszukiwania wzorca opiera się na porównywaniu skrótów (hashy) fragmentów tekstu?",
        options: [
            { text: "Algorytm Rabina-Karpa.", isCorrect: true },
            { text: "Algorytm KMP.", isCorrect: false },
            { text: "Algorytm naiwny.", isCorrect: false },
            { text: "Algorytm Boyera-Moore'a.", isCorrect: false }
        ]
    },
    {
        id: 439,
        category: "Algorytmy tekstowe: podstawy",
        text: "Który z algorytmów wyszukiwania wzorca wymaga wcześniejszego przetworzenia (preprocessingu) samego wzorca?",
        options: [
            { text: "KMP.", isCorrect: true },
            { text: "Algorytm naiwny.", isCorrect: false },
            { text: "Żaden z wymienionych.", isCorrect: false },
            { text: "Wyszukiwanie binarne w tekście.", isCorrect: false }
        ]
    },
    {
        id: 440,
        category: "Kompresja: Huffman",
        text: "Czy kod Huffmana jest kodem o stałej czy zmiennej długości?",
        options: [
            { text: "Zmiennej — częstsze symbole otrzymują krótsze kody.", isCorrect: true },
            { text: "Stałej — wszystkie symbole mają tyle samo bitów.", isCorrect: false },
            { text: "Zależy od wielkości alfabetu.", isCorrect: false },
            { text: "Zawsze dokładnie 8 bitów.", isCorrect: false }
        ]
    },
    {
        id: 441,
        category: "Kompresja: Huffman",
        text: "Jakiej struktury danych używa algorytm Huffmana do budowy drzewa kodowego?",
        options: [
            { text: "Kolejki priorytetowej (Min-Heap).", isCorrect: true },
            { text: "Stosu.", isCorrect: false },
            { text: "Drzewa BST.", isCorrect: false },
            { text: "Tablicy haszującej.", isCorrect: false }
        ]
    },
    {
        id: 442,
        category: "Kompresja: LZW",
        text: "Na czym polega główna idea kompresji LZW?",
        options: [
            { text: "Buduje słownik ciągów znaków w locie, bez potrzeby jego wcześniejszej znajomości.", isCorrect: true },
            { text: "Wymaga dwukrotnego przejścia przez plik: policzenia częstości, a potem kodowania.", isCorrect: false },
            { text: "Generuje zawsze optymalne drzewo binarne minimalizujące entropię.", isCorrect: false },
            { text: "Działa wyłącznie na danych multimedialnych.", isCorrect: false }
        ]
    },
    {
        id: 443,
        category: "Kompresja: LZW",
        text: "Czym inicjalizowany jest słownik na starcie kompresji LZW?",
        options: [
            { text: "Zestawem podstawowych, pojedynczych znaków alfabetu wejściowego.", isCorrect: true },
            { text: "Pustym zbiorem — słownik buduje się od zera bez wpisów startowych.", isCorrect: false },
            { text: "Wszystkimi możliwymi parami znaków.", isCorrect: false },
            { text: "Drzewem Huffmana zbudowanym z pliku wejściowego.", isCorrect: false }
        ]
    },
    {
        id: 444,
        category: "Taksonomia Flynna",
        text: "Które modele wchodzą w skład taksonomii Flynna?",
        options: [
            { text: "SISD, SIMD, MISD, MIMD.", isCorrect: true },
            { text: "EREW, CREW, CRCW.", isCorrect: false },
            { text: "LIFO, FIFO, LRU.", isCorrect: false },
            { text: "RAM, ROM, PRAM.", isCorrect: false }
        ]
    },
    {
        id: 445,
        category: "Taksonomia Flynna",
        text: "Co charakteryzuje architekturę SIMD?",
        options: [
            { text: "Jeden strumień instrukcji wykonywany równocześnie na wielu różnych danych — np. GPU.", isCorrect: true },
            { text: "Wiele niezależnych strumieni instrukcji na różnych danych — klasyczny procesor wielordzeniowy.", isCorrect: false },
            { text: "Jeden strumień instrukcji na jednych danych — klasyczny CPU.", isCorrect: false },
            { text: "Wiele strumieni instrukcji na tych samych danych.", isCorrect: false }
        ]
    },
    {
        id: 446,
        category: "Taksonomia Flynna",
        text: "Co charakteryzuje architekturę MIMD?",
        options: [
            { text: "Wiele niezależnych strumieni instrukcji operuje na różnych zbiorach danych — typowy współczesny procesor wielordzeniowy.", isCorrect: true },
            { text: "Jeden strumień instrukcji na wielu danych.", isCorrect: false },
            { text: "Wiele strumieni instrukcji na jednych danych — model teoretyczny, rzadko spotykany.", isCorrect: false },
            { text: "Jeden strumień instrukcji na jednych danych.", isCorrect: false }
        ]
    },
    {
        id: 447,
        category: "Taksonomia Flynna",
        text: "Który model taksonomii Flynna jest uznawany za rzadki, głównie teoretyczny?",
        options: [
            { text: "MISD (Multiple Instruction, Single Data).", isCorrect: true },
            { text: "SISD.", isCorrect: false },
            { text: "SIMD.", isCorrect: false },
            { text: "MIMD.", isCorrect: false }
        ]
    },

    // === BLOK 2 ===
    {
        id: 448,
        category: "Modele PRAM",
        text: "Co oznacza skrót PRAM?",
        options: [
            { text: "Parallel Random Access Machine — abstrakcyjny model komputera z wieloma procesorami dzielącymi wspólną pamięć.", isCorrect: true },
            { text: "Program Random Access Memory.", isCorrect: false },
            { text: "Parallel Recursive Algorithm Model.", isCorrect: false },
            { text: "Process Ranking And Memory.", isCorrect: false }
        ]
    },
    {
        id: 449,
        category: "Modele PRAM",
        text: "Który model PRAM jest najbardziej restrykcyjny?",
        options: [
            { text: "EREW (Exclusive Read, Exclusive Write) — tylko jeden procesor może czytać i tylko jeden pisać do danej komórki naraz.", isCorrect: true },
            { text: "CRCW (Concurrent Read, Concurrent Write).", isCorrect: false },
            { text: "CREW (Concurrent Read, Exclusive Write).", isCorrect: false },
            { text: "ERCW (Exclusive Read, Concurrent Write).", isCorrect: false }
        ]
    },
    {
        id: 450,
        category: "Modele PRAM",
        text: "Co charakteryzuje model CREW?",
        options: [
            { text: "Wiele procesorów może jednocześnie czytać z tej samej komórki, ale zapis wymaga wyłączności.", isCorrect: true },
            { text: "Tylko jeden procesor może czytać, wielu może pisać.", isCorrect: false },
            { text: "Zarówno czytanie, jak i pisanie muszą być wyłączne.", isCorrect: false },
            { text: "Wielu procesorów może jednocześnie czytać i pisać bez ograniczeń.", isCorrect: false }
        ]
    },
    {
        id: 451,
        category: "Modele PRAM",
        text: "Który model PRAM jest najsilniejszy (najmniej restrykcyjny)?",
        options: [
            { text: "CRCW (Concurrent Read, Concurrent Write).", isCorrect: true },
            { text: "EREW.", isCorrect: false },
            { text: "CREW.", isCorrect: false },
            { text: "ERCW.", isCorrect: false }
        ]
    },
    {
        id: 452,
        category: "Modele PRAM: podtypy CRCW",
        text: "Jak działa podtyp 'Common' w modelu CRCW?",
        options: [
            { text: "Wszyscy procesorzy próbujący zapisać do tej samej komórki muszą zapisać dokładnie tę samą wartość.", isCorrect: true },
            { text: "Losowo wybierany procesor wygrywa dostęp do zapisu.", isCorrect: false },
            { text: "Wygrywa procesor o najwyższym priorytecie.", isCorrect: false },
            { text: "Zapis jest zawsze zabroniony przy konflikcie.", isCorrect: false }
        ]
    },
    {
        id: 453,
        category: "Modele PRAM: podtypy CRCW",
        text: "Jak działa podtyp 'Arbitrary' w modelu CRCW?",
        options: [
            { text: "Przy konflikcie zapisu losowo wybierany procesor wygrywa dostęp.", isCorrect: true },
            { text: "Wszyscy muszą zapisać tę samą wartość.", isCorrect: false },
            { text: "Wygrywa procesor o najwyższym priorytecie.", isCorrect: false },
            { text: "Zapis jest zabroniony.", isCorrect: false }
        ]
    },
    {
        id: 454,
        category: "Modele PRAM: podtypy CRCW",
        text: "Jak działa podtyp 'Priority' w modelu CRCW?",
        options: [
            { text: "Przy konflikcie zapisu wygrywa procesor z najwyższym priorytetem.", isCorrect: true },
            { text: "Wygrywa losowo wybrany procesor.", isCorrect: false },
            { text: "Wszyscy muszą zapisać tę samą wartość.", isCorrect: false },
            { text: "Żaden zapis się nie odbywa.", isCorrect: false }
        ]
    },
    {
        id: 455,
        category: "Powtórka: sortowanie",
        text: "Który algorytm sortowania jednocześnie gwarantuje $O(n\\log n)$ w najgorszym przypadku i sortuje w miejscu ($O(1)$ pamięci)?",
        options: [
            { text: "Heapsort.", isCorrect: true },
            { text: "Quicksort.", isCorrect: false },
            { text: "Merge Sort.", isCorrect: false },
            { text: "Counting Sort.", isCorrect: false }
        ]
    },
    {
        id: 456,
        category: "Powtórka: sortowanie",
        text: "Który algorytm sortowania jest jedynym spośród Quicksort/Merge Sort/Heapsort, który nie jest stabilny ani nie sortuje w miejscu jednocześnie?",
        options: [
            { text: "Merge Sort (stabilny, ale nie sortuje w miejscu).", isCorrect: true },
            { text: "Heapsort.", isCorrect: false },
            { text: "Quicksort.", isCorrect: false },
            { text: "Żaden z nich nie ma takiej cechy.", isCorrect: false }
        ]
    },
    {
        id: 457,
        category: "Powtórka: struktury danych",
        text: "Która struktura danych gwarantuje $O(\\log n)$ dla wyszukiwania, wstawiania i usuwania w każdym przypadku?",
        options: [
            { text: "Drzewo czerwono-czarne.", isCorrect: true },
            { text: "Zwykłe drzewo BST.", isCorrect: false },
            { text: "Tablica haszująca z chainingiem.", isCorrect: false },
            { text: "Lista jednokierunkowa.", isCorrect: false }
        ]
    },
    {
        id: 458,
        category: "Powtórka: grafy",
        text: "Który algorytm najkrótszych ścieżek działa poprawnie z ujemnymi wagami, ale nie z ujemnymi cyklami osiągalnymi ze źródła?",
        options: [
            { text: "Algorytm Forda-Bellmana.", isCorrect: true },
            { text: "Algorytm Dijkstry.", isCorrect: false },
            { text: "BFS.", isCorrect: false },
            { text: "Algorytm Prima.", isCorrect: false }
        ]
    },
    {
        id: 459,
        category: "Powtórka: grafy",
        text: "Który algorytm MST buduje jedno, ciągle rosnące drzewo, a nie las wielu drzew?",
        options: [
            { text: "Algorytm Prima.", isCorrect: true },
            { text: "Algorytm Kruskala.", isCorrect: false },
            { text: "Oba budują las.", isCorrect: false },
            { text: "Żaden z nich nie tworzy drzewa.", isCorrect: false }
        ]
    },
    {
        id: 460,
        category: "Powtórka: haszowanie vs BST",
        text: "Dlaczego tablica haszująca zwykle nie nadaje się do operacji takich jak znajdowanie minimum czy zakresowe wyszukiwanie posortowanych danych?",
        options: [
            { text: "Bo nie zachowuje żadnego uporządkowania kluczy — hashowanie celowo rozprasza je losowo.", isCorrect: true },
            { text: "Bo działa wolniej niż BST dla każdej operacji.", isCorrect: false },
            { text: "Bo wymaga więcej pamięci niż drzewo AVL.", isCorrect: false },
            { text: "Bo nie obsługuje duplikatów kluczy.", isCorrect: false }
        ]
    },
    {
        id: 461,
        category: "Powtórka: rekurencja",
        text: "Jakie jest rozwiązanie $T(n) = T(n/2) + O(1)$ według Master Theorem?",
        options: [
            { text: "$\\Theta(\\log n)$", isCorrect: true },
            { text: "$\\Theta(n)$", isCorrect: false },
            { text: "$\\Theta(n \\log n)$", isCorrect: false },
            { text: "$\\Theta(1)$", isCorrect: false }
        ]
    },
    {
        id: 462,
        category: "Powtórka: rekurencja",
        text: "Do jakiego przypadku Master Theorem należy $T(n) = 2T(n/2) + 1$?",
        options: [
            { text: "Przypadek 1 — $f(n)$ jest zdominowane przez $n^{\\log_b a}$, dając $\\Theta(n)$.", isCorrect: true },
            { text: "Przypadek 2 — daje $\\Theta(n \\log n)$.", isCorrect: false },
            { text: "Przypadek 3 — daje $\\Theta(1)$.", isCorrect: false },
            { text: "Nie da się zastosować Master Theorem.", isCorrect: false }
        ]
    },
    {
        id: 463,
        category: "Powtórka: kolejki priorytetowe",
        text: "Jaka jest złożoność operacji Insert w klasycznym kopcu binarnym?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 464,
        category: "Powtórka: statystyki pozycyjne",
        text: "Jaka jest oczekiwana złożoność algorytmu Randomized Select (Quickselect) dla znalezienia $i$-tej statystyki?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$ zawsze.", isCorrect: false }
        ]
    },
    {
        id: 465,
        category: "Powtórka: grafy",
        text: "Jaka struktura danych jest kluczowa w implementacji algorytmu Kruskala do wykrywania cykli?",
        options: [
            { text: "Struktura zbiorów rozłącznych (Union-Find).", isCorrect: true },
            { text: "Kopiec binarny.", isCorrect: false },
            { text: "Tablica haszująca.", isCorrect: false },
            { text: "Drzewo przedziałowe.", isCorrect: false }
        ]
    },
    {
        id: 466,
        category: "Powtórka: sieci przepływowe",
        text: "Co mówi twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Maksymalny przepływ w sieci jest równy przepustowości minimalnego przekroju.", isCorrect: true },
            { text: "Maksymalny przepływ jest zawsze równy sumie wszystkich przepustowości.", isCorrect: false },
            { text: "Minimalny przekrój zawiera zawsze dokładnie jedną krawędź.", isCorrect: false },
            { text: "Dotyczy wyłącznie grafów acyklicznych.", isCorrect: false }
        ]
    },
    {
        id: 467,
        category: "Powtórka: kompresja",
        text: "Jaki typ kodu generuje algorytm Huffmana — na czym polega jego 'prefiksowość'?",
        options: [
            { text: "Żadne słowo kodowe nie jest przedrostkiem innego, co pozwala jednoznacznie dekodować bez separatorów.", isCorrect: true },
            { text: "Wszystkie kody mają tę samą długość.", isCorrect: false },
            { text: "Kod jest zawsze binarnie symetryczny.", isCorrect: false },
            { text: "Kody są sortowane alfabetycznie.", isCorrect: false }
        ]
    },
    {
        id: 468,
        category: "Powtórka: teoria złożoności",
        text: "Która z podanych złożoności jest najgorsza (rośnie najszybciej)?",
        options: [
            { text: "$O(n!)$", isCorrect: true },
            { text: "$O(2^n)$", isCorrect: false },
            { text: "$O(n^3)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 469,
        category: "Powtórka: struktury danych",
        text: "Jaka jest złożoność dostępu do dowolnego elementu w tablicy dynamicznej (znając indeks)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "Zamortyzowane $O(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 470,
        category: "Powtórka: drzewa",
        text: "Dlaczego zwykłe drzewo BST może zdegenerować się do listy?",
        options: [
            { text: "Gdy elementy są wstawiane w kolejności już posortowanej, bez żadnego mechanizmu balansowania.", isCorrect: true },
            { text: "Gdy liczba elementów jest parzysta.", isCorrect: false },
            { text: "Nigdy — BST zawsze pozostaje zbalansowane z definicji.", isCorrect: false },
            { text: "Tylko gdy korzeń ma wartość zero.", isCorrect: false }
        ]
    },
    {
        id: 471,
        category: "Powtórka: haszowanie vs drzewa",
        text: "Która struktura pozwala na szybsze (średnio) wyszukiwanie po kluczu: tablica haszująca czy zbalansowane drzewo BST?",
        options: [
            { text: "Tablica haszująca — średnio $O(1)$ vs $O(\\log n)$ w drzewie.", isCorrect: true },
            { text: "Zbalansowane drzewo BST zawsze szybsze.", isCorrect: false },
            { text: "Obie mają identyczną złożoność średnią.", isCorrect: false },
            { text: "Zależy wyłącznie od rozmiaru klucza.", isCorrect: false }
        ]
    },
    {
        id: 472,
        category: "Powtórka: algorytmy tekstowe",
        text: "Który algorytm wyszukiwania wzorca porównuje znaki od prawej do lewej strony wzorca?",
        options: [
            { text: "Boyer-Moore.", isCorrect: true },
            { text: "KMP.", isCorrect: false },
            { text: "Naiwny.", isCorrect: false },
            { text: "Rabin-Karp.", isCorrect: false }
        ]
    },
    {
        id: 473,
        category: "Powtórka: grafy dwudzielne",
        text: "Czy każdy graf posiada maksymalne skojarzenie równe minimalnemu pokryciu wierzchołkowemu?",
        options: [
            { text: "Nie — to twierdzenie (Königa) jest prawdziwe wyłącznie dla grafów dwudzielnych.", isCorrect: true },
            { text: "Tak, dla dowolnego grafu.", isCorrect: false },
            { text: "Tak, ale tylko dla grafów acyklicznych.", isCorrect: false },
            { text: "Nie ma takiej zależności w żadnym typie grafu.", isCorrect: false }
        ]
    },
    {
        id: 474,
        category: "Powtórka: analiza zamortyzowana",
        text: "Jaki jest zamortyzowany koszt wstawienia elementu do tablicy dynamicznej podwajającej rozmiar po zapełnieniu?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 475,
        category: "Powtórka: architektury równoległe",
        text: "Do jakiego modelu Flynna zalicza się klasyczny, jednordzeniowy procesor wykonujący jedną instrukcję na jednych danych?",
        options: [
            { text: "SISD.", isCorrect: true },
            { text: "SIMD.", isCorrect: false },
            { text: "MIMD.", isCorrect: false },
            { text: "MISD.", isCorrect: false }
        ]
    },
    {
        id: 476,
        category: "Powtórka: PRAM",
        text: "Który model PRAM pozwala na jednoczesny zapis wielu procesorów do tej samej komórki, wymagając reguły rozstrzygania konfliktu?",
        options: [
            { text: "CRCW.", isCorrect: true },
            { text: "EREW.", isCorrect: false },
            { text: "CREW.", isCorrect: false },
            { text: "Żaden z modeli PRAM nie na to pozwala.", isCorrect: false }
        ]
    },
    {
        id: 477,
        category: "Powtórka: drzewa AVL vs RB",
        text: "Które drzewo jest bardziej rygorystycznie (ściślej) zbalansowane: AVL czy czerwono-czarne?",
        options: [
            { text: "AVL.", isCorrect: true },
            { text: "Czerwono-czarne.", isCorrect: false },
            { text: "Oba identycznie.", isCorrect: false },
            { text: "Żadne z nich nie gwarantuje balansu.", isCorrect: false }
        ]
    },
    {
        id: 478,
        category: "Powtórka: sieci przepływowe",
        text: "Jak nazywa się ścieżka w grafie residualnym, wzdłuż której można zwiększyć przepływ?",
        options: [
            { text: "Ścieżka powiększająca (augmenting path).", isCorrect: true },
            { text: "Ścieżka Eulera.", isCorrect: false },
            { text: "Ścieżka Hamiltona.", isCorrect: false },
            { text: "Ścieżka topologiczna.", isCorrect: false }
        ]
    },
    {
        id: 479,
        category: "Powtórka: sortowanie",
        text: "Który algorytm sortowania NIE opiera się na porównaniach elementów?",
        options: [
            { text: "Counting Sort.", isCorrect: true },
            { text: "Quicksort.", isCorrect: false },
            { text: "Merge Sort.", isCorrect: false },
            { text: "Heapsort.", isCorrect: false }
        ]
    },
    {
        id: 480,
        category: "Powtórka: struktury danych",
        text: "Jaka jest złożoność wyszukiwania elementu w drzewie Trie o kluczu długości $L$?",
        options: [
            { text: "$O(L)$, niezależnie od liczby przechowywanych słów.", isCorrect: true },
            { text: "$O(\\log n)$, gdzie $n$ to liczba słów w słowniku.", isCorrect: false },
            { text: "$O(n)$, gdzie $n$ to liczba wszystkich słów.", isCorrect: false },
            { text: "$O(1)$ zawsze.", isCorrect: false }
        ]
    },
    {
        id: 481,
        category: "Powtórka: grafy",
        text: "Który typ przeszukiwania grafu gwarantuje znalezienie najkrótszej ścieżki (liczba krawędzi) w grafie nieważonym?",
        options: [
            { text: "BFS.", isCorrect: true },
            { text: "DFS.", isCorrect: false },
            { text: "Oba dają identyczny wynik.", isCorrect: false },
            { text: "Żadne z nich.", isCorrect: false }
        ]
    },
    {
        id: 482,
        category: "Powtórka: kompresja",
        text: "Który algorytm kompresji buduje słownik ciągów znaków w trakcie przetwarzania danych, bez znajomości ich z góry?",
        options: [
            { text: "LZW.", isCorrect: true },
            { text: "Huffman.", isCorrect: false },
            { text: "Counting Sort.", isCorrect: false },
            { text: "Radix Sort.", isCorrect: false }
        ]
    },
    {
        id: 483,
        category: "Powtórka: statystyki pozycyjne",
        text: "Jaki algorytm gwarantuje pesymistyczny czas liniowy $O(n)$ przy wyznaczaniu $i$-tej statystyki pozycyjnej?",
        options: [
            { text: "Algorytm median of medians (magicznych piątek).", isCorrect: true },
            { text: "Zwykły Quickselect bez modyfikacji.", isCorrect: false },
            { text: "Sortowanie Heapsortem i odczyt elementu.", isCorrect: false },
            { text: "BFS na drzewie BST.", isCorrect: false }
        ]
    },
    {
        id: 484,
        category: "Powtórka: haszowanie",
        text: "Który typ rozwiązywania kolizji może cierpieć na zjawisko wtórnego grupowania (secondary clustering)?",
        options: [
            { text: "Adresowanie kwadratowe.", isCorrect: true },
            { text: "Metoda łańcuchowa.", isCorrect: false },
            { text: "Adresowanie bezpośrednie.", isCorrect: false },
            { text: "Perfect hashing.", isCorrect: false }
        ]
    },
    {
        id: 485,
        category: "Powtórka: grafy",
        text: "Ile krawędzi ma drzewo rozpinające grafu o $V$ wierzchołkach?",
        options: [
            { text: "$V-1$", isCorrect: true },
            { text: "$V$", isCorrect: false },
            { text: "$V+1$", isCorrect: false },
            { text: "$V(V-1)/2$", isCorrect: false }
        ]
    },
    {
        id: 486,
        category: "Powtórka: architektury równoległe",
        text: "Czy model MISD (Multiple Instruction, Single Data) jest powszechnie stosowany w praktyce?",
        options: [
            { text: "Nie — jest modelem głównie teoretycznym, rzadko spotykanym w rzeczywistych systemach.", isCorrect: true },
            { text: "Tak — to podstawa działania każdego GPU.", isCorrect: false },
            { text: "Tak — to podstawa działania każdego CPU wielordzeniowego.", isCorrect: false },
            { text: "Jest tak samo powszechny jak SIMD.", isCorrect: false }
        ]
    },
    {
        id: 487,
        category: "Powtórka: drzewa przedziałowe i OST",
        text: "Co łączy drzewo przedziałowe (Interval Tree) i drzewo statystyk pozycyjnych (OS-Tree)?",
        options: [
            { text: "Obie struktury rozszerzają zwykłe drzewo BST/RB o dodatkowy atrybut aktualizowany w czasie $O(1)$ przy rotacjach.", isCorrect: true },
            { text: "Obie wymagają tablicy haszującej do działania.", isCorrect: false },
            { text: "Obie działają wyłącznie na liczbach całkowitych dodatnich.", isCorrect: false },
            { text: "Żadna z nich nie wspiera operacji wstawiania.", isCorrect: false }
        ]
    },

    // === CIĄG DALSZY BAZY (ID 132-201, stają się 799-868) ===
    {
        id: 488,
        category: "Pseudokod: Merge Sort",
        text: "W procedurze `Merge(A, left, mid, right)` z wykładu, ile tablic pomocniczych jest tworzonych i jaki mają rozmiar względem podziału?",
        options: [
            { text: "Jedna tablica `B` o rozmiarze `right - left + 1`, do której trafiają scalone elementy.", isCorrect: true },
            { text: "Dwie tablice o rozmiarze `n` każda.", isCorrect: false },
            { text: "Tablica `B` o rozmiarze stałym równym 2.", isCorrect: false },
            { text: "Żadna tablica pomocnicza nie jest tworzona.", isCorrect: false }
        ]
    },
    {
        id: 489,
        category: "Pseudokod: Merge Sort",
        text: "Jaki jest warunek zakończenia rekurencji w `MergeSort(A, left, right)` z wykładu?",
        options: [
            { text: "Wykonuje się dopóki `left < right`.", isCorrect: true },
            { text: "Wykonuje się dopóki `left <= right`.", isCorrect: false },
            { text: "Wykonuje się dopóki `left == right`.", isCorrect: false },
            { text: "Wykonuje się dopóki `right == 0`.", isCorrect: false }
        ]
    },
    {
        id: 490,
        category: "Pseudokod: Merge Sort",
        text: "Jak wyznaczany jest środek tablicy `mid` w `MergeSort`?",
        options: [
            { text: "`mid = floor((left + right) / 2)`", isCorrect: true },
            { text: "`mid = (right - left) / 2`", isCorrect: false },
            { text: "`mid = left * right / 2`", isCorrect: false },
            { text: "`mid` jest losowane.", isCorrect: false }
        ]
    },
    {
        id: 491,
        category: "Pseudokod: Heap Sort",
        text: "Co robi pętla główna w `Heapsort(A)` na każdej iteracji (od `length(A)` w dół do 2)?",
        options: [
            { text: "Zamienia `A[1]` z `A[i]`, zmniejsza `heap_size` o 1 i wywołuje `Heapify(A,1)`.", isCorrect: true },
            { text: "Wywołuje `BuildHeap` od nowa.", isCorrect: false },
            { text: "Usuwa element `A[i]` z tablicy.", isCorrect: false },
            { text: "Sortuje podtablicę `Insertion Sortem`.", isCorrect: false }
        ]
    },
    {
        id: 492,
        category: "Pseudokod: Heap Sort",
        text: "Dlaczego pętla w `Heapsort` schodzi do 2, a nie do 1?",
        options: [
            { text: "Gdy zostaje 1 element w kopcu, jest on już na swojej ostatecznej, posortowanej pozycji.", isCorrect: true },
            { text: "Bo indeks 1 jest zarezerwowany na wartownika.", isCorrect: false },
            { text: "Bo `Heapify(A,1)` zgłasza błąd dla `heap_size=1`.", isCorrect: false },
            { text: "To błąd w pseudokodzie — powinna schodzić do 1.", isCorrect: false }
        ]
    },
    {
        id: 493,
        category: "Pseudokod: Heapify",
        text: "W procedurze `Heapify(A, i)`, jaki warunek decyduje, że `largest` zostaje ustawione na `l` (lewe dziecko)?",
        options: [
            { text: "`l <= heap_size(A)` oraz `A[l] > A[i]`", isCorrect: true },
            { text: "`l < heap_size(A)` oraz `A[l] < A[i]`", isCorrect: false },
            { text: "`l >= heap_size(A)`", isCorrect: false },
            { text: "Zawsze, niezależnie od porównania.", isCorrect: false }
        ]
    },
    {
        id: 494,
        category: "Pseudokod: BuildHeap",
        text: "W jakim zakresie iteruje pętla w `BuildHeap(A)` z wykładu?",
        options: [
            { text: "Od `floor(length[A]/2)` w dół do 1.", isCorrect: true },
            { text: "Od 1 do `length[A]`.", isCorrect: false },
            { text: "Od `length[A]` w dół do 1.", isCorrect: false },
            { text: "Od 1 do `floor(length[A]/2)`.", isCorrect: false }
        ]
    },
    {
        id: 495,
        category: "Pseudokod: Quicksort",
        text: "Jakie są początkowe wartości wskaźników `i` oraz `j` w procedurze `Partition` wg schematu Hoare'a z wykładu (dla `A[p..r]`)?",
        options: [
            { text: "`i = p - 1`, `j = r + 1`", isCorrect: true },
            { text: "`i = p`, `j = r`", isCorrect: false },
            { text: "`i = 0`, `j = length(A)`", isCorrect: false },
            { text: "`i = p + 1`, `j = r - 1`", isCorrect: false }
        ]
    },
    {
        id: 496,
        category: "Pseudokod: Quicksort",
        text: "Jak wybierany jest pivot `x` w procedurze `Partition` z wykładu?",
        options: [
            { text: "`x = A[p]` — pierwszy element przedziału.", isCorrect: true },
            { text: "`x = A[r]` — ostatni element przedziału.", isCorrect: false },
            { text: "`x` jest losowany.", isCorrect: false },
            { text: "`x` to mediana trzech elementów.", isCorrect: false }
        ]
    },
    {
        id: 497,
        category: "Pseudokod: Quicksort",
        text: "Co zwraca `Partition` z wykładu i jak są wywoływane rekurencje w `Quicksort(A, p, r)`?",
        options: [
            { text: "Zwraca `j`; wywołania to `Quicksort(A, p, q-1)` i `Quicksort(A, q+1, r)`.", isCorrect: true },
            { text: "Zwraca zawsze `p`; wywołania to `Quicksort(A, p, q)` i `Quicksort(A, q, r)`.", isCorrect: false },
            { text: "Zwraca sumę indeksów `i+j`.", isCorrect: false },
            { text: "Nic nie zwraca — modyfikuje tablicę globalnie.", isCorrect: false }
        ]
    },
    {
        id: 498,
        category: "Pseudokod: Counting Sort",
        text: "W `CountingSort(A, B, k)` z wykładu, co robi pętla `for i=2 to k: C[i] = C[i] + C[i-1]`?",
        options: [
            { text: "Oblicza sumy prefiksowe — liczbę elementów mniejszych lub równych danej wartości.", isCorrect: true },
            { text: "Zeruje tablicę `C`.", isCorrect: false },
            { text: "Sortuje tablicę `C` rosnąco.", isCorrect: false },
            { text: "Kopiuje `A` do `B`.", isCorrect: false }
        ]
    },
    {
        id: 499,
        category: "Pseudokod: Counting Sort",
        text: "Dlaczego ostatnia pętla przepisująca wynik do `B` w Counting Sort iteruje `for j=n downto 1`?",
        options: [
            { text: "Aby zachować stabilność sortowania (elementy o równych kluczach zachowują kolejność).", isCorrect: true },
            { text: "Aby zresetować tablicę `C` przy okazji.", isCorrect: false },
            { text: "Bo algorytm sortuje malejąco.", isCorrect: false },
            { text: "To nieistotny szczegół implementacyjny.", isCorrect: false }
        ]
    },
    {
        id: 500,
        category: "Pseudokod: Radix Sort",
        text: "Jak wygląda główna pętla `RadixSort(A, d)` z wykładu?",
        options: [
            { text: "`for i=1 to d: StableSort(A) on digit i` — sortuje kolejno po każdej cyfrze stabilnym sortowaniem.", isCorrect: true },
            { text: "`for i=d to 1: QuickSort(A)`", isCorrect: false },
            { text: "Jednorazowe wywołanie `BuildHeap(A)`.", isCorrect: false },
            { text: "`for i=1 to n: Insert(A[i])`", isCorrect: false }
        ]
    },
    {
        id: 501,
        category: "Pseudokod: Radix Sort",
        text: "Zakładając, że `StableSort` to Counting Sort o złożoności $O(n+k)$, jaka jest łączna złożoność Radix Sort dla $d$ cyfr?",
        options: [
            { text: "$T(n) = d \\cdot O(n+k)$, co przy $k=O(n)$ upraszcza się do $O(n)$.", isCorrect: true },
            { text: "$T(n) = O(n^2)$ niezależnie od $d$.", isCorrect: false },
            { text: "$T(n) = O(d \\log n)$", isCorrect: false },
            { text: "$T(n) = O(n \\log n)$ zawsze.", isCorrect: false }
        ]
    },
    {
        id: 502,
        category: "Pseudokod: Bucket Sort",
        text: "Do jakiego kubełka trafia element `A[i]` w `Bucket-Sort(A,n)` z wykładu?",
        options: [
            { text: "Do listy `B[floor(n * A[i])]`.", isCorrect: true },
            { text: "Do listy `B[A[i] mod n]`.", isCorrect: false },
            { text: "Do listy `B[ceil(A[i]/n)]`.", isCorrect: false },
            { text: "Zależy losowo od wartości `A[i]`.", isCorrect: false }
        ]
    },
    {
        id: 503,
        category: "Pseudokod: Bucket Sort",
        text: "Jakim algorytmem sortowana jest zawartość pojedynczego kubełka w pseudokodzie Bucket Sort?",
        options: [
            { text: "Sortowaniem przez wstawianie (Insertion Sort).", isCorrect: true },
            { text: "Quicksortem.", isCorrect: false },
            { text: "Heapsortem.", isCorrect: false },
            { text: "Rekurencyjnie tym samym Bucket Sortem.", isCorrect: false }
        ]
    },
    {
        id: 504,
        category: "Pseudokod: Sortowanie topologiczne",
        text: "Jak działa `Topological-Sort()` z wykładu?",
        options: [
            { text: "Uruchamia DFS; gdy wierzchołek staje się czarny (zakończony), wypisuje go — porządek topologiczny to wypisanie odwrotne.", isCorrect: true },
            { text: "Uruchamia BFS i wypisuje wierzchołki w kolejności odwiedzin.", isCorrect: false },
            { text: "Sortuje wierzchołki po stopniu wejściowym Heapsortem.", isCorrect: false },
            { text: "Relaksuje krawędzie jak w Bellmanie-Fordzie.", isCorrect: false }
        ]
    },
    {
        id: 505,
        category: "Pseudokod: Sortowanie topologiczne",
        text: "Jaki jest czas działania sortowania topologicznego i na czym opiera się dowód poprawności z wykładu?",
        options: [
            { text: "$O(V+E)$; dowód opiera się na tym, że dla krawędzi $(u,v)$ zachodzi $u.f > v.f$.", isCorrect: true },
            { text: "$O(V \\log V)$; dowód opiera się na własności kopca.", isCorrect: false },
            { text: "$O(V^2)$; dowód opiera się na macierzy sąsiedztwa.", isCorrect: false },
            { text: "$O(E \\log V)$; dowód opiera się na Union-Find.", isCorrect: false }
        ]
    },
    {
        id: 506,
        category: "Pseudokod: Listy",
        text: "W `ListInsert(L, x)` z wykładu, co dzieje się z `head[L]` po wstawieniu `x` na początek listy?",
        options: [
            { text: "`head[L] = x` (nowy element staje się nową głową listy).", isCorrect: true },
            { text: "`head[L]` pozostaje bez zmian.", isCorrect: false },
            { text: "`head[L] = NIL`", isCorrect: false },
            { text: "`head[L] = next[x]`", isCorrect: false }
        ]
    },
    {
        id: 507,
        category: "Pseudokod: Listy",
        text: "W `ListDelete(L, x)`, co się dzieje, gdy `prev[x] == NIL` (czyli `x` jest głową listy)?",
        options: [
            { text: "Aktualizowana jest bezpośrednio `head[L] = next[x]`.", isCorrect: true },
            { text: "Zgłaszany jest błąd — nie można usunąć głowy.", isCorrect: false },
            { text: "Lista jest przebudowywana od nowa.", isCorrect: false },
            { text: "Nic się nie dzieje, `x` zostaje na liście.", isCorrect: false }
        ]
    },
    {
        id: 508,
        category: "Pseudokod: Kolejka",
        text: "W tablicowej implementacji kolejki cyklicznej (`Enqueue`), co się dzieje, gdy `tail[Q] == length[Q]`?",
        options: [
            { text: "`tail[Q]` zostaje ustawiony z powrotem na 1.", isCorrect: true },
            { text: "Zgłaszany jest błąd przepełnienia.", isCorrect: false },
            { text: "Tablica jest dynamicznie powiększana.", isCorrect: false },
            { text: "`head[Q]` jest przesuwany do przodu.", isCorrect: false }
        ]
    },
    {
        id: 509,
        category: "Pseudokod: HeapInsert",
        text: "Jaki warunek sprawdza pętla `while` w `HeapInsert(A, key)`, aby przesunąć nowy element w górę kopca?",
        options: [
            { text: "`i > 1 AND A[Parent(i)] < key`", isCorrect: true },
            { text: "`i < heap_size AND A[Left(i)] > key`", isCorrect: false },
            { text: "`A[Parent(i)] > key`", isCorrect: false },
            { text: "`i == 1`", isCorrect: false }
        ]
    },
    {
        id: 510,
        category: "Pseudokod: HeapExtractMax",
        text: "Jaki jest pierwszy krok w `HeapExtractMax(A)` po zapamiętaniu `max = A[1]`?",
        options: [
            { text: "Ostatni element `A[heap_size[A]]` trafia na miejsce korzenia `A[1]`, po czym `heap_size` maleje o 1.", isCorrect: true },
            { text: "Wywoływane jest `BuildHeap` od nowa.", isCorrect: false },
            { text: "Prawe dziecko korzenia zajmuje jego miejsce.", isCorrect: false },
            { text: "Zwracany jest błąd, jeśli `heap_size < 1`, bez dalszych kroków.", isCorrect: false }
        ]
    },
    {
        id: 511,
        category: "Pseudokod: BST TreeSearch",
        text: "Jaka jest złożoność rekurencyjnego `TreeSearch(x, k)` z wykładu?",
        options: [
            { text: "$O(h)$, gdzie $h$ to wysokość drzewa.", isCorrect: true },
            { text: "$O(\\log n)$ zawsze, niezależnie od struktury drzewa.", isCorrect: false },
            { text: "$O(n)$ zawsze.", isCorrect: false },
            { text: "$O(1)$", isCorrect: false }
        ]
    },
    {
        id: 512,
        category: "Pseudokod: BST TreeInsert",
        text: "W `TreeInsert(x, k)`, kiedy nowy element trafia rekurencyjnie do lewego poddrzewa?",
        options: [
            { text: "Gdy `k < key[x]`.", isCorrect: true },
            { text: "Gdy `k > key[x]`.", isCorrect: false },
            { text: "Gdy `left[x] == NULL`.", isCorrect: false },
            { text: "Zawsze przy pierwszym wywołaniu.", isCorrect: false }
        ]
    },
    {
        id: 513,
        category: "Pseudokod: BST usuwanie",
        text: "Zgodnie z zarysem algorytmu usuwania z drzewa BST, co robimy gdy węzeł `x` posiada dwoje dzieci?",
        options: [
            { text: "Zamieniamy `x` z jego bezpośrednim następnikiem (lub poprzednikiem), a następnie usuwamy według przypadku 1 lub 2 na nowej pozycji.", isCorrect: true },
            { text: "Usuwamy `x` bezpośrednio i podłączamy oba poddrzewa do rodzica.", isCorrect: false },
            { text: "Zgłaszamy błąd — nie można usuwać węzła z dwojgiem dzieci.", isCorrect: false },
            { text: "Zamieniamy `x` z korzeniem całego drzewa.", isCorrect: false }
        ]
    },
    {
        id: 514,
        category: "Pseudokod: AVL wstawianie",
        text: "Jak zbudowana jest metoda `put()` z wykładu wstawiająca do drzewa AVL?",
        options: [
            { text: "Standardowe wstawianie jak w BST, zakończone wywołaniem `balance(x)` na powrocie z rekurencji.", isCorrect: true },
            { text: "Wstawianie wyłącznie na dno drzewa bez rebalansowania.", isCorrect: false },
            { text: "Wstawianie z natychmiastową rotacją przed porównaniem kluczy.", isCorrect: false },
            { text: "Iteracyjne wstawianie z użyciem stosu pomocniczego.", isCorrect: false }
        ]
    },
    {
        id: 515,
        category: "Pseudokod: AVL balanceFactor",
        text: "Jak liczony jest `balanceFactor(x)` w kodzie z wykładu?",
        options: [
            { text: "`height(x.left) - height(x.right)`", isCorrect: true },
            { text: "`height(x.left) + height(x.right)`", isCorrect: false },
            { text: "`max(height(x.left), height(x.right))`", isCorrect: false },
            { text: "`height(x.right) - height(x.left)`", isCorrect: false }
        ]
    },
    {
        id: 516,
        category: "Pseudokod: AVL rotacje",
        text: "W metodzie `balance(x)` z wykładu, jaki warunek wywołuje rotację w prawo na `x`?",
        options: [
            { text: "`balanceFactor(x) < -1`", isCorrect: true },
            { text: "`balanceFactor(x) > 1`", isCorrect: false },
            { text: "`balanceFactor(x) == 0`", isCorrect: false },
            { text: "`height(x) > 1`", isCorrect: false }
        ]
    },
    {
        id: 517,
        category: "Pseudokod: AVL rotateLeft",
        text: "W `rotateLeft(x)` z wykładu, co dokładnie dzieje się z węzłem `y = x.right` i jego lewym poddrzewem?",
        options: [
            { text: "`y` staje się nowym korzeniem, a `y.left` zostaje podpięte jako `x.right`.", isCorrect: true },
            { text: "`y` staje się liściem, a `x` przejmuje jego miejsce jako korzeń.", isCorrect: false },
            { text: "`y.left` jest usuwane z drzewa.", isCorrect: false },
            { text: "Rotacja nie zmienia relacji `y` względem `x`.", isCorrect: false }
        ]
    },
    {
        id: 518,
        category: "Pseudokod: AVL usuwanie",
        text: "Jak zbudowana jest metoda `delete()` z wykładu dla drzewa AVL?",
        options: [
            { text: "Usuwanie jak w zwykłym BST, zakończone wywołaniem `balance(x)` przy powrocie z rekurencji.", isCorrect: true },
            { text: "Usuwanie wyłącznie liści — węzły wewnętrzne nie mogą być usuwane.", isCorrect: false },
            { text: "Zamiana drzewa na tablicę i ponowna budowa.", isCorrect: false },
            { text: "Usuwanie bez żadnego rebalansowania.", isCorrect: false }
        ]
    },
    {
        id: 519,
        category: "Pseudokod: RB rbInsert",
        text: "Jaki jest pierwszy krok w `rbInsert(x)` z wykładu, zaraz po standardowym `treeInsert(x)`?",
        options: [
            { text: "Nowy węzeł `x` otrzymuje kolor czerwony (`x->color = RED`).", isCorrect: true },
            { text: "Wykonywana jest natychmiastowa rotacja.", isCorrect: false },
            { text: "Węzeł `x` otrzymuje kolor czarny.", isCorrect: false },
            { text: "Cała ścieżka do korzenia jest przemalowywana.", isCorrect: false }
        ]
    },
    {
        id: 520,
        category: "Pseudokod: RB rbInsert",
        text: "Jaki warunek uruchamia pętlę naprawczą `while` w `rbInsert(x)`?",
        options: [
            { text: "`x != root` oraz `x->p->color == RED` (rodzic wstawionego węzła jest czerwony).", isCorrect: true },
            { text: "`x` jest liściem NIL.", isCorrect: false },
            { text: "Dziadek `x` jest czerwony.", isCorrect: false },
            { text: "Zawsze, niezależnie od kolorów.", isCorrect: false }
        ]
    },
    {
        id: 521,
        category: "Pseudokod: Skip Lists",
        text: "W `Search(list, searchKey)` z wykładu, jak przebiega główna pętla po poziomach?",
        options: [
            { text: "`for i = list.level downto 1` — schodzimy z najwyższego poziomu w dół.", isCorrect: true },
            { text: "`for i = 1 to list.level` — wspinamy się od najniższego poziomu w górę.", isCorrect: false },
            { text: "Poziom jest losowany na starcie wyszukiwania.", isCorrect: false },
            { text: "Przeszukiwany jest tylko poziom najniższy.", isCorrect: false }
        ]
    },
    {
        id: 522,
        category: "Pseudokod: Skip Lists",
        text: "Do czego służy tablica `update[1..MaxLevel]` w procedurze `Insert` skip listy?",
        options: [
            { text: "Przechowuje na każdym poziomie ostatni węzeł przed miejscem wstawienia, by zaktualizować jego wskaźniki `forward`.", isCorrect: true },
            { text: "Przechowuje historię losowań poziomów wszystkich węzłów.", isCorrect: false },
            { text: "Buforuje usunięte elementy przed zwolnieniem pamięci.", isCorrect: false },
            { text: "Zlicza liczbę odwiedzin każdego poziomu.", isCorrect: false }
        ]
    },
    {
        id: 523,
        category: "Pseudokod: Hash-Insert",
        text: "Jaki warunek kończy pętlę `do...while` w `HASH-INSERT(T, k)` przy adresowaniu otwartym?",
        options: [
            { text: "`T[j] == NIL` (znaleziono wolne miejsce) lub `i == m` (przeszukano całą tablicę).", isCorrect: true },
            { text: "`j == 0`", isCorrect: false },
            { text: "`T[j] == k`", isCorrect: false },
            { text: "Pętla nigdy się nie kończy.", isCorrect: false }
        ]
    },
    {
        id: 524,
        category: "Pseudokod: Hash-Search",
        text: "Jak wygląda pętla przeszukująca w `HASH-SEARCH(T, k)` przy adresowaniu otwartym?",
        options: [
            { text: "Iteruje po kolejnych próbach `j = h(k,i)`, aż znajdzie `T[j]=k` lub natrafi na `T[j]=NIL`, lub `i=m`.", isCorrect: true },
            { text: "Przeszukuje całą tablicę liniowo od indeksu 0.", isCorrect: false },
            { text: "Zawsze zwraca pierwszy niepusty slot.", isCorrect: false },
            { text: "Wywołuje rekurencyjnie samą siebie dla każdej kolizji.", isCorrect: false }
        ]
    },
    {
        id: 525,
        category: "Pseudokod: MINIMUM",
        text: "Jaka jest złożoność iteracyjnej procedury `MINIMUM(A)` z wykładu i dlaczego uznaje się ją za optymalną?",
        options: [
            { text: "$O(n-1)$ porównań — to optymalny czas, bo trzeba porównać każdy element poza pierwszym.", isCorrect: true },
            { text: "$O(\\log n)$ dzięki użyciu `Partition`.", isCorrect: false },
            { text: "$O(1)$, jeśli tablica jest posortowana.", isCorrect: false },
            { text: "$O(n \\log n)$, bo wymaga wstępnego sortowania.", isCorrect: false }
        ]
    },
    {
        id: 526,
        category: "Pseudokod: OS-Select",
        text: "Na jakiej podstawie `OS-Select(x, i)` decyduje, że zwraca właśnie węzeł `x`?",
        options: [
            { text: "Gdy ranga węzła `r = x->left->size + 1` jest równa szukanemu `i`.", isCorrect: true },
            { text: "Gdy `x` jest liściem.", isCorrect: false },
            { text: "Gdy `i` jest większe niż `r`.", isCorrect: false },
            { text: "Gdy `x->left` jest puste.", isCorrect: false }
        ]
    },
    {
        id: 527,
        category: "Pseudokod: OS-Select",
        text: "Co robi `OS-Select(x, i)`, gdy `i < r`?",
        options: [
            { text: "Rekurencyjnie wywołuje `OS-Select(x->left, i)`.", isCorrect: true },
            { text: "Rekurencyjnie wywołuje `OS-Select(x->right, i-r)`.", isCorrect: false },
            { text: "Zwraca `x` natychmiast.", isCorrect: false },
            { text: "Zgłasza błąd zakresu.", isCorrect: false }
        ]
    },
    {
        id: 528,
        category: "Pseudokod: BFS",
        text: "Jaka jest kolejność kroków w `BFS(G, s)` z wykładu tuż po zdjęciu wierzchołka `u` z kolejki `Q`?",
        options: [
            { text: "Dla każdego sąsiada `v`: jeśli biały, koloruje na szary, ustawia `d`, `p` i wstawia do kolejki, a na końcu `u` staje się czarny.", isCorrect: true },
            { text: "`u` jest od razu usuwany z grafu.", isCorrect: false },
            { text: "Wywoływana jest relaksacja krawędzi jak w Dijkstrze.", isCorrect: false },
            { text: "Sąsiedzi `u` są sortowane wg wagi.", isCorrect: false }
        ]
    },
    {
        id: 529,
        category: "Pseudokod: DFS",
        text: "Co robi `DFS(G)` przed uruchomieniem `DFS_Visit` dla każdego białego wierzchołka?",
        options: [
            { text: "Inicjalizuje wszystkie wierzchołki na kolor biały i zeruje globalny licznik czasu.", isCorrect: true },
            { text: "Sortuje wierzchołki wg stopnia.", isCorrect: false },
            { text: "Buduje kolejkę priorytetową.", isCorrect: false },
            { text: "Oblicza macierz sąsiedztwa.", isCorrect: false }
        ]
    },
    {
        id: 530,
        category: "Pseudokod: DFS_Visit",
        text: "Jakie dwa znaczniki czasowe ustawia `DFS_Visit(u)` — na starcie i na końcu procedury?",
        options: [
            { text: "`u->d = time` na starcie (po pokolorowaniu na żółto/szaro) i `u->f = time` na końcu (po pokolorowaniu na czarno).", isCorrect: true },
            { text: "Tylko `u->f`, `u->d` nie jest używane.", isCorrect: false },
            { text: "`u->key` i `u->parent`.", isCorrect: false },
            { text: "Czas nie jest w ogóle zapisywany w tej wersji pseudokodu.", isCorrect: false }
        ]
    },
    {
        id: 531,
        category: "Pseudokod: MST-Prim",
        text: "Jakie wartości `key[v]` są ustawiane na starcie `MST-Prim(G,w,r)` dla wszystkich wierzchołków oprócz korzenia `r`?",
        options: [
            { text: "$\\infty$", isCorrect: true },
            { text: "$0$", isCorrect: false },
            { text: "$-1$", isCorrect: false },
            { text: "Waga najbliższej krawędzi wychodzącej.", isCorrect: false }
        ]
    },
    {
        id: 532,
        category: "Pseudokod: MST-Prim",
        text: "Co robi pętla wewnętrzna `MST-Prim` dla każdego sąsiada `v` wyciągniętego wierzchołka `u`?",
        options: [
            { text: "Jeśli `v` jest w `Q` i `w(u,v) < key[v]`, aktualizuje `p[v]=u` oraz `key[v]=w(u,v)`.", isCorrect: true },
            { text: "Zawsze dodaje krawędź `(u,v)` do drzewa MST.", isCorrect: false },
            { text: "Usuwa `v` z grafu.", isCorrect: false },
            { text: "Sortuje sąsiadów rosnąco wg wagi.", isCorrect: false }
        ]
    },
    {
        id: 533,
        category: "Pseudokod: Kruskal",
        text: "Jaka jest kolejność kroków w `Kruskal()` z wykładu?",
        options: [
            { text: "`MakeSet` dla każdego wierzchołka → posortowanie krawędzi rosnąco → dla każdej krawędzi sprawdzenie `FindSet(u)≠FindSet(v)` i `Union`.", isCorrect: true },
            { text: "Sortowanie wierzchołków → BFS → dodanie wszystkich krawędzi.", isCorrect: false },
            { text: "Budowa kolejki priorytetowej wierzchołków → relaksacja.", isCorrect: false },
            { text: "Sortowanie krawędzi malejąco → usuwanie najdroższych.", isCorrect: false }
        ]
    },
    {
        id: 534,
        category: "Pseudokod: Relax",
        text: "Jak zdefiniowana jest procedura `Relax(u,v,w)` z wykładu?",
        options: [
            { text: "`if d[v] > d[u]+w then d[v] = d[u]+w`", isCorrect: true },
            { text: "`d[v] = min(d[u], d[v]) + w` zawsze.", isCorrect: false },
            { text: "`if d[v] < d[u]+w then d[v] = d[u]+w`", isCorrect: false },
            { text: "`d[v] = w(u,v)` bezwarunkowo.", isCorrect: false }
        ]
    },
    {
        id: 535,
        category: "Pseudokod: Bellman-Ford",
        text: "Co robi `BellmanFord()` po zakończeniu głównej pętli relaksacji ($|V|-1$ razy)?",
        options: [
            { text: "Dla każdej krawędzi sprawdza `d[v] > d[u]+w(u,v)` — jeśli prawda, zwraca „no solution” (ujemny cykl).", isCorrect: true },
            { text: "Buduje drzewo MST z relaksowanych krawędzi.", isCorrect: false },
            { text: "Sortuje wierzchołki topologicznie.", isCorrect: false },
            { text: "Kończy działanie bez dodatkowej weryfikacji.", isCorrect: false }
        ]
    },
    {
        id: 536,
        category: "Pseudokod: Dijkstra",
        text: "Jaka jest kolejność operacji w głównej pętli `Dijkstra(G)` z wykładu?",
        options: [
            { text: "`ExtractMin(Q)` → dodanie `u` do `S` → relaksacja wszystkich krawędzi wychodzących z `u`.", isCorrect: true },
            { text: "Relaksacja wszystkich krawędzi grafu → `ExtractMin`.", isCorrect: false },
            { text: "Sortowanie wierzchołków wg `d[v]` → BFS.", isCorrect: false },
            { text: "`Union` i `FindSet` na wierzchołkach.", isCorrect: false }
        ]
    },
    {
        id: 537,
        category: "Pseudokod: Floyd-Warshall",
        text: "Jak zdefiniowana jest rekurencja w potrójnej pętli `FLOYD_WARSHALL(W)`?",
        options: [
            { text: "`D_k[i][j] = min(D_k[i][j], D_k[i][k] + D_k[k][j])`", isCorrect: true },
            { text: "`D_k[i][j] = D_k[i][k] * D_k[k][j]`", isCorrect: false },
            { text: "`D_k[i][j] = max(D_k[i][j], W[i][j])`", isCorrect: false },
            { text: "`D_k[i][j] = D_{k-1}[i][j] + 1`", isCorrect: false }
        ]
    },
    {
        id: 538,
        category: "Pseudokod: Floyd-Warshall",
        text: "Co reprezentuje ciąg macierzy $D_0, D_1, ..., D_k$ generowany przez Floyda-Warshalla?",
        options: [
            { text: "Zbieżny ciąg macierzy dążący do macierzy najkrótszych ścieżek.", isCorrect: true },
            { text: "Kolejne kroki sortowania topologicznego.", isCorrect: false },
            { text: "Macierze przepływów residualnych.", isCorrect: false },
            { text: "Historię rotacji drzewa AVL.", isCorrect: false }
        ]
    },
    {
        id: 539,
        category: "Pseudokod: Ford-Fulkerson",
        text: "Jak obliczana jest przepustowość ścieżki `c_f(p)` w `FORD-FULKERSON(G,s,t)`?",
        options: [
            { text: "Jako minimum przepustowości residualnych wszystkich krawędzi na ścieżce `p`.", isCorrect: true },
            { text: "Jako suma przepustowości wszystkich krawędzi na ścieżce.", isCorrect: false },
            { text: "Jako przepustowość pierwszej krawędzi wychodzącej ze źródła.", isCorrect: false },
            { text: "Jako średnia arytmetyczna przepustowości krawędzi.", isCorrect: false }
        ]
    },
    {
        id: 540,
        category: "Pseudokod: Ford-Fulkerson",
        text: "Co oznacza \"warunek skośnej symetrii\" `f[v,u] = -f[u,v]` z pseudokodu Forda-Fulkersona?",
        options: [
            { text: "Przepływ na krawędzi powrotnej jest zanegowaną wartością przepływu na krawędzi w przód.", isCorrect: true },
            { text: "Przepustowości obu kierunków muszą być sobie równe.", isCorrect: false },
            { text: "Waga krawędzi musi być zawsze ujemna.", isCorrect: false },
            { text: "Dotyczy wyłącznie krawędzi wychodzących ze źródła.", isCorrect: false }
        ]
    },
    {
        id: 541,
        category: "Pseudokod: Rabin-Karp",
        text: "W `Rabin-Karp-Matcher` z wykładu, co dzieje się gdy `p == t_s` (hashe się zgadzają)?",
        options: [
            { text: "Wykonywane jest dokładne porównanie `P[1..m] = T[s+1..s+m]`, by potwierdzić trafienie i uniknąć fałszywego dopasowania.", isCorrect: true },
            { text: "Od razu drukowany jest indeks jako pewne trafienie.", isCorrect: false },
            { text: "Zmieniana jest wartość modułu `q`.", isCorrect: false },
            { text: "Algorytm kończy działanie.", isCorrect: false }
        ]
    },
    {
        id: 542,
        category: "Pseudokod: Rabin-Karp",
        text: "Jak wyliczana jest kolejna suma kontrolna `t_{s+1}` z aktualnej `t_s` w Rabinie-Karpie?",
        options: [
            { text: "Odejmuje się wpływ znaku wypadającego z okna (`h = d^{m-1} mod q`), a dodaje nowy znak — wszystko modulo `q`.", isCorrect: true },
            { text: "Cały skrót jest liczony od nowa dla każdego przesunięcia.", isCorrect: false },
            { text: "Wykonywana jest operacja bitowego przesunięcia (shift).", isCorrect: false },
            { text: "`t_{s+1}` jest zawsze równe `t_s`.", isCorrect: false }
        ]
    },
    {
        id: 543,
        category: "Pseudokod: KMP",
        text: "Jak reaguje `KMP-Matcher` na niedopasowanie znaku podczas głównej pętli dopasowującej?",
        options: [
            { text: "Cofa wskaźnik zgodności do `q = π[q]`, bez cofania wskaźnika w tekście.", isCorrect: true },
            { text: "Cofa się do początku wzorca i zaczyna od nowa.", isCorrect: false },
            { text: "Przesuwa okno tekstu o długość wzorca `m`.", isCorrect: false },
            { text: "Oblicza nowy hash tekstu.", isCorrect: false }
        ]
    },
    {
        id: 544,
        category: "Pseudokod: KMP – Compute-Prefix-Function",
        text: "Jaka jest złożoność `Compute-Prefix-Function(P)` i dlaczego, mimo pętli `while` wewnątrz `for`?",
        options: [
            { text: "$\\Theta(m)$ — z analizy zamortyzowanej: `k` rośnie łącznie o co najwyżej `m` w całej pętli `for`.", isCorrect: true },
            { text: "$\\Theta(m^2)$ — pętla `while` w każdym kroku sprawdza cały dotychczasowy wzorzec od zera.", isCorrect: false },
            { text: "$\\Theta(m \\log m)$ — z powodu użycia struktury kopca.", isCorrect: false },
            { text: "$\\Theta(|\\Sigma| \\cdot m)$ — sprawdza cały alfabet dla każdej litery.", isCorrect: false }
        ]
    },
    {
        id: 545,
        category: "Pseudokod: Boyer-Moore",
        text: "Z jakich dwóch przesunięć (heurystyk) korzysta `Boyer-Moore-Matcher` z wykładu przy wyborze skoku?",
        options: [
            { text: "Wybiera większe z przesunięć: „bo zły znak” oraz „dobry sufiks”.", isCorrect: true },
            { text: "Zawsze przesuwa się o jedną pozycję jak w algorytmie naiwnym.", isCorrect: false },
            { text: "Korzysta wyłącznie z tablicy prefiksowej `π`.", isCorrect: false },
            { text: "Korzysta z rolling hash jak Rabin-Karp.", isCorrect: false }
        ]
    },
    {
        id: 546,
        category: "Pseudokod: Huffman",
        text: "Ile razy wykonuje się główna pętla `for` w `HUFFMAN(C)` dla alfabetu o $n$ symbolach?",
        options: [
            { text: "$n-1$ razy.", isCorrect: true },
            { text: "$n$ razy.", isCorrect: false },
            { text: "$\\log_2 n$ razy.", isCorrect: false },
            { text: "$2n$ razy.", isCorrect: false }
        ]
    },
    {
        id: 547,
        category: "Pseudokod: Huffman",
        text: "Co dzieje się w każdej iteracji pętli `HUFFMAN(C)` z nowym węzłem `z`?",
        options: [
            { text: "Pobiera dwa najrzadsze węzły z kolejki, tworzy z nich `z` o wadze `f[z]=f[left]+f[right]` i wstawia `z` z powrotem do kolejki.", isCorrect: true },
            { text: "Usuwa najczęstszy węzeł z kolejki i dzieli go na dwa.", isCorrect: false },
            { text: "Sortuje cały alfabet malejąco wg częstości.", isCorrect: false },
            { text: "Tworzy bezpośrednio kod binarny bez budowy drzewa.", isCorrect: false }
        ]
    },
    {
        id: 548,
        category: "Sylabus: podstawy",
        text: "Który wariant Partition (Lomuto czy Hoare) gwarantuje, że pivot trafia na swoją ostateczną, posortowaną pozycję?",
        options: [
            { text: "Lomuto.", isCorrect: true },
            { text: "Hoare.", isCorrect: false },
            { text: "Oba jednakowo.", isCorrect: false },
            { text: "Żaden z nich.", isCorrect: false }
        ]
    },
    {
        id: 549,
        category: "Sylabus: sortowanie",
        text: "Który z poniższych algorytmów sortowania NIE opiera się na porównaniach elementów?",
        options: [
            { text: "Counting Sort.", isCorrect: true },
            { text: "Quicksort.", isCorrect: false },
            { text: "Merge Sort.", isCorrect: false },
            { text: "Heapsort.", isCorrect: false }
        ]
    },
    {
        id: 550,
        category: "Sylabus: kopce",
        text: "Czy kopiec binarny (Max-Heap) jest przykładem drzewa BST?",
        options: [
            { text: "Nie — kopiec nie spełnia własności BST (porządku lewo/prawo), tylko własność rodzic-dziecko.", isCorrect: true },
            { text: "Tak, kopiec to szczególny przypadek BST.", isCorrect: false },
            { text: "Tak, ale tylko Min-Heap.", isCorrect: false },
            { text: "To zależy od implementacji tablicowej.", isCorrect: false }
        ]
    },
    {
        id: 551,
        category: "Sylabus: drzewa",
        text: "Które drzewo gwarantuje ściślejsze (mniejsze) ograniczenie wysokości: AVL czy czerwono-czarne?",
        options: [
            { text: "AVL — jest bardziej rygorystycznie zbalansowane.", isCorrect: true },
            { text: "Czerwono-czarne.", isCorrect: false },
            { text: "Oba mają identyczne ograniczenie wysokości.", isCorrect: false },
            { text: "Żadne nie gwarantuje $O(\\log n)$.", isCorrect: false }
        ]
    },
    {
        id: 552,
        category: "Sylabus: haszowanie",
        text: "Która metoda rozwiązywania kolizji nie wymaga dodatkowej pamięci poza samą tablicą?",
        options: [
            { text: "Adresowanie otwarte.", isCorrect: true },
            { text: "Metoda łańcuchowa.", isCorrect: false },
            { text: "Obie wymagają dodatkowej pamięci w tym samym stopniu.", isCorrect: false },
            { text: "Żadna z nich.", isCorrect: false }
        ]
    },
    {
        id: 553,
        category: "Sylabus: grafy",
        text: "Który algorytm wyznaczania MST działa lepiej dla grafów gęstych: Prim czy Kruskal?",
        options: [
            { text: "Prim (z odpowiednią implementacją kolejki priorytetowej).", isCorrect: true },
            { text: "Kruskal.", isCorrect: false },
            { text: "Oba mają identyczną złożoność niezależnie od gęstości.", isCorrect: false },
            { text: "Żaden nie nadaje się do grafów gęstych.", isCorrect: false }
        ]
    },
    {
        id: 554,
        category: "Sylabus: grafy",
        text: "Czy algorytm Dijkstry zadziała poprawnie na grafie z pojedynczą ujemną krawędzią, jeśli reszta wag jest dodatnia?",
        options: [
            { text: "Nie — obecność nawet jednej ujemnej wagi może dać błędny wynik.", isCorrect: true },
            { text: "Tak, dopóki nie ma ujemnych cykli.", isCorrect: false },
            { text: "Tak, jeśli graf jest acykliczny.", isCorrect: false },
            { text: "Tak, jeśli źródło nie sąsiaduje z tą krawędzią.", isCorrect: false }
        ]
    },
    {
        id: 555,
        category: "Sylabus: sieci przepływowe",
        text: "Co jest wymagane, aby algorytm Forda-Fulkersona się zatrzymał (przy wagach całkowitoliczbowych)?",
        options: [
            { text: "Brak ścieżki powiększającej w sieci residualnej.", isCorrect: true },
            { text: "Osiągnięcie z góry ustalonej liczby iteracji.", isCorrect: false },
            { text: "Wyzerowanie wszystkich przepustowości.", isCorrect: false },
            { text: "Znalezienie cyklu w sieci residualnej.", isCorrect: false }
        ]
    },
    {
        id: 556,
        category: "Sylabus: tekstowe",
        text: "Który z algorytmów wyszukiwania wzorca wymaga wstępnego przetworzenia (preprocessing) samego wzorca?",
        options: [
            { text: "KMP.", isCorrect: true },
            { text: "Algorytm naiwny.", isCorrect: false },
            { text: "Żaden z wymienionych.", isCorrect: false },
            { text: "Tylko wyszukiwanie binarne w tekście.", isCorrect: false }
        ]
    },
    {
        id: 557,
        category: "Sylabus: kompresja",
        text: "Czy kod Huffmana jest kodem o stałej czy zmiennej długości?",
        options: [
            { text: "Zmiennej długości — częstsze symbole dostają krótsze kody.", isCorrect: true },
            { text: "Stałej długości — wszystkie symbole mają tyle samo bitów.", isCorrect: false },
            { text: "Zależy od rozmiaru alfabetu.", isCorrect: false },
            { text: "Zawsze dokładnie 8 bitów na symbol.", isCorrect: false }
        ]
    },

    // === START OF ORIGINAL ID 1-131 (Now 869-999) ===
    {
        id: 558,
        category: "Złożoność obliczeniowa",
        text: "Co oznacza notacja $O(g(n))$?",
        options: [
            { text: "Asymptotyczne ograniczenie górne (pesymistyczny czas działania).", isCorrect: true },
            { text: "Asymptotyczne ograniczenie dolne.", isCorrect: false },
            { text: "Dokładny, średni czas działania algorytmu.", isCorrect: false },
            { text: "Złożoność pamięciową algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 559,
        category: "Złożoność obliczeniowa",
        text: "Co oznacza notacja $\\Omega(g(n))$?",
        options: [
            { text: "Asymptotyczne ograniczenie dolne (optymistyczny czas działania).", isCorrect: true },
            { text: "Asymptotyczne ograniczenie górne.", isCorrect: false },
            { text: "Złożoność pamięciową.", isCorrect: false },
            { text: "Zawsze czas stały.", isCorrect: false }
        ]
    },
    {
        id: 560,
        category: "Złożoność obliczeniowa",
        text: "Która z podanych złożoności rośnie najwolniej?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false },
            { text: "$O(2^n)$", isCorrect: false }
        ]
    },
    {
        id: 561,
        category: "Złożoność obliczeniowa",
        text: "Jak poprawnie uporządkować rosnąco złożoności $n\\log n,\\ n^2,\\ n^3,\\ 2^n$?",
        options: [
            { text: "$n\\log n \\le n^2 \\le n^3 \\le 2^n$", isCorrect: true },
            { text: "$n\\log n \\le n^3 \\le n^2 \\le 2^n$", isCorrect: false },
            { text: "$2^n \\le n^3 \\le n^2 \\le n\\log n$", isCorrect: false },
            { text: "$n^2 \\le n\\log n \\le n^3 \\le 2^n$", isCorrect: false }
        ]
    },
    {
        id: 562,
        category: "Analiza rekurencji",
        text: "Jakie jest rozwiązanie $T(n) = 2T(n/2) + n$ według twierdzenia o rekurencji uniwersalnej?",
        options: [
            { text: "$\\Theta(n \\log n)$", isCorrect: true },
            { text: "$\\Theta(n^2)$", isCorrect: false },
            { text: "$\\Theta(n)$", isCorrect: false },
            { text: "$\\Theta(\\log n)$", isCorrect: false }
        ]
    },
    {
        id: 563,
        category: "Analiza rekurencji",
        text: "Dla równania $T(n)=aT(n/b)+f(n)$, jakie warunki muszą spełniać stałe $a$ i $b$, by stosować Master Theorem?",
        options: [
            { text: "$a \\ge 1$", isCorrect: true },
            { text: "$b > 1$", isCorrect: true },
            { text: "$a = 0$", isCorrect: false },
            { text: "$b < 1$", isCorrect: false }
        ]
    },
    {
        id: 564,
        category: "Analiza zamortyzowana",
        text: "Co dokładnie bada analiza zamortyzowana?",
        options: [
            { text: "Średni koszt operacji w najgorszym (pesymistycznym) ciągu operacji.", isCorrect: true },
            { text: "Oczekiwany czas dla losowych danych wejściowych.", isCorrect: false },
            { text: "Czas najdroższej pojedynczej operacji w programie.", isCorrect: false },
            { text: "Złożoność pamięciową algorytmu.", isCorrect: false }
        ]
    },
    {
        id: 565,
        category: "Analiza zamortyzowana",
        text: "Jaki jest zamortyzowany koszt wstawienia elementu na koniec tablicy dynamicznej, która podwaja swój rozmiar po zapełnieniu?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 566,
        category: "Analiza zamortyzowana",
        text: "Które z poniższych są technikami analizy zamortyzowanej?",
        options: [
            { text: "Metoda kosztu sumarycznego (aggregate method).", isCorrect: true },
            { text: "Metoda księgowania (accounting method).", isCorrect: true },
            { text: "Metoda potencjału (potential method).", isCorrect: true },
            { text: "Metoda Monte Carlo.", isCorrect: false }
        ]
    },
    {
        id: 567,
        category: "Wstęp do algorytmiki",
        text: "Co to jest algorytm?",
        options: [
            { text: "Skończony ciąg jasno zdefiniowanych czynności prowadzących do rozwiązania problemu.", isCorrect: true },
            { text: "Dowolny program napisany w języku wysokiego poziomu.", isCorrect: false },
            { text: "Struktura danych przechowująca wynik obliczeń.", isCorrect: false },
            { text: "Zbiór testów jednostkowych.", isCorrect: false }
        ]
    },
    {
        id: 568,
        category: "Sortowanie: Insertion Sort",
        text: "Jaka jest złożoność sortowania przez wstawianie w najgorszym przypadku?",
        options: [
            { text: "$O(n^2)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false }
        ]
    },
    {
        id: 569,
        category: "Sortowanie: Insertion Sort",
        text: "Kiedy Insertion Sort osiąga swój najlepszy czas $O(n)$?",
        options: [
            { text: "Gdy tablica wejściowa jest już posortowana rosnąco.", isCorrect: true },
            { text: "Gdy tablica jest posortowana malejąco.", isCorrect: false },
            { text: "Gdy dane są w pełni losowe.", isCorrect: false },
            { text: "Nigdy — najlepszy przypadek to zawsze $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 570,
        category: "Sortowanie: Merge Sort",
        text: "Jaka jest złożoność czasowa Merge Sort niezależnie od danych wejściowych?",
        options: [
            { text: "$\\Theta(n \\log n)$", isCorrect: true },
            { text: "$\\Theta(n)$", isCorrect: false },
            { text: "$\\Theta(n^2)$", isCorrect: false },
            { text: "Zależna od danych: od $O(n)$ do $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 571,
        category: "Sortowanie: Merge Sort",
        text: "Jaka jest złożoność pamięciowa Merge Sort?",
        options: [
            { text: "$O(n)$ — potrzebne są tablice pomocnicze przy scalaniu.", isCorrect: true },
            { text: "$O(1)$ — sortuje w miejscu.", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 572,
        category: "Sortowanie: Merge Sort",
        text: "Czy Merge Sort jest algorytmem stabilnym?",
        options: [
            { text: "Tak.", isCorrect: true },
            { text: "Nie.", isCorrect: false }
        ]
    },
    {
        id: 573,
        category: "Sortowanie: Quicksort",
        text: "Jaki jest pesymistyczny czas działania Quicksort i kiedy zwykle występuje?",
        options: [
            { text: "$O(n^2)$, np. gdy tablica jest już posortowana, a pivot to skrajny element.", isCorrect: true },
            { text: "$O(n \\log n)$ dla każdego wejścia.", isCorrect: false },
            { text: "$O(n)$ dla danych posortowanych.", isCorrect: false },
            { text: "$O(n!)$", isCorrect: false }
        ]
    },
    {
        id: 574,
        category: "Sortowanie: Quicksort",
        text: "Co zwraca procedura Partition w Quicksort?",
        options: [
            { text: "Indeks, względem którego tablica została podzielona.", isCorrect: true },
            { text: "Wartość elementu osiowego (pivot).", isCorrect: false },
            { text: "Rozmiar lewej podtablicy.", isCorrect: false },
            { text: "Wskaźnik na nową tablicę pomocniczą.", isCorrect: false }
        ]
    },
    {
        id: 575,
        category: "Sortowanie: Quicksort",
        text: "Dlaczego zrandomizowany Quicksort (losowy wybór pivota) chroni przed złośliwymi danymi wejściowymi?",
        options: [
            { text: "Bo wymusza oczekiwany czas $O(n\\log n)$ niezależnie od układu danych wejściowych.", isCorrect: true },
            { text: "Bo obniża pesymistyczny czas do $O(n\\log n)$.", isCorrect: false },
            { text: "Bo gwarantuje idealny podział tablicy na połowy w każdym kroku.", isCorrect: false },
            { text: "Bo eliminuje potrzebę rekurencji.", isCorrect: false }
        ]
    },
    {
        id: 576,
        category: "Sortowanie: Heap Sort",
        text: "Które zalety jednocześnie posiada Heapsort (w odróżnieniu od Quicksort i Merge Sort)?",
        options: [
            { text: "Gwarantowany czas $O(n\\log n)$ w najgorszym przypadku.", isCorrect: true },
            { text: "Sortowanie w miejscu ($O(1)$ dodatkowej pamięci).", isCorrect: true },
            { text: "Stabilność sortowania.", isCorrect: false },
            { text: "Czas liniowy $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 577,
        category: "Sortowanie: Heap Sort",
        text: "Czy Heapsort jest algorytmem stabilnym?",
        options: [
            { text: "Nie.", isCorrect: true },
            { text: "Tak.", isCorrect: false }
        ]
    },
    {
        id: 578,
        category: "Teoria sortowań",
        text: "Jakie jest dolne ograniczenie złożoności dla algorytmów sortujących opartych na porównaniach?",
        options: [
            { text: "$\\Omega(n \\log n)$", isCorrect: true },
            { text: "$\\Omega(n)$", isCorrect: false },
            { text: "$\\Omega(n^2)$", isCorrect: false },
            { text: "$\\Omega(1)$", isCorrect: false }
        ]
    },
    {
        id: 579,
        category: "Teoria sortowań",
        text: "Dlaczego drzewo decyzyjne dla sortowania $n$ elementów przez porównania musi mieć co najmniej $n!$ liści?",
        options: [
            { text: "Bo istnieje $n!$ permutacji danych wejściowych, a algorytm musi umieć zwrócić każdą jako wynik.", isCorrect: true },
            { text: "Bo każdy poziom drzewa generuje $n!$ nowych gałęzi.", isCorrect: false },
            { text: "Bo tyle wynosi liczba możliwych pivotów w Quicksorcie.", isCorrect: false },
            { text: "Bo tyle wynosi maksymalna wysokość kopca.", isCorrect: false }
        ]
    },
    {
        id: 580,
        category: "Sortowanie liniowe: Counting Sort",
        text: "Jaka jest złożoność Counting Sort dla $n$ elementów z zakresu $0..k$?",
        options: [
            { text: "$\\Theta(n+k)$", isCorrect: true },
            { text: "$\\Theta(n \\log n)$", isCorrect: false },
            { text: "$\\Theta(n^2)$", isCorrect: false },
            { text: "$\\Theta(k \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 581,
        category: "Sortowanie liniowe: Counting Sort",
        text: "Jaki warunek muszą spełniać dane wejściowe, aby zastosować Counting Sort?",
        options: [
            { text: "Muszą być liczbami całkowitymi z ustalonego, ograniczonego zakresu.", isCorrect: true },
            { text: "Muszą pochodzić z rozkładu jednostajnego.", isCorrect: false },
            { text: "Muszą być posortowane wstępnie.", isCorrect: false },
            { text: "Muszą być liczbami zmiennoprzecinkowymi.", isCorrect: false }
        ]
    },
    {
        id: 582,
        category: "Sortowanie liniowe: Radix Sort",
        text: "Z jakiego stabilnego algorytmu pomocniczego zwykle korzysta Radix Sort?",
        options: [
            { text: "Counting Sort.", isCorrect: true },
            { text: "Quicksort.", isCorrect: false },
            { text: "Heapsort.", isCorrect: false },
            { text: "Bubble Sort.", isCorrect: false }
        ]
    },
    {
        id: 583,
        category: "Sortowanie liniowe: Radix Sort",
        text: "W jakiej kolejności Radix Sort zwykle przetwarza cyfry liczb, by zagwarantować poprawność?",
        options: [
            { text: "Od najmniej znaczącej (LSB) do najbardziej znaczącej (MSB).", isCorrect: true },
            { text: "Od najbardziej znaczącej do najmniej znaczącej.", isCorrect: false },
            { text: "Losowo.", isCorrect: false },
            { text: "Kolejność nie ma znaczenia.", isCorrect: false }
        ]
    },
    {
        id: 584,
        category: "Sortowanie liniowe: Bucket Sort",
        text: "Dla jakich danych Bucket Sort działa najlepiej, osiągając średni czas $O(n)$?",
        options: [
            { text: "Dla danych z rozkładu jednostajnego na przedziale $[0,1)$.", isCorrect: true },
            { text: "Dla danych posortowanych malejąco.", isCorrect: false },
            { text: "Dla dużych liczb całkowitych.", isCorrect: false },
            { text: "Wyłącznie dla ciągów tekstowych.", isCorrect: false }
        ]
    },
    {
        id: 585,
        category: "Sortowanie liniowe: Bucket Sort",
        text: "Jakim algorytmem domyślnie sortuje się zawartość pojedynczego kubełka w Bucket Sort?",
        options: [
            { text: "Sortowaniem przez wstawianie (Insertion Sort).", isCorrect: true },
            { text: "Quicksortem.", isCorrect: false },
            { text: "Heapsortem.", isCorrect: false },
            { text: "Bubble Sortem.", isCorrect: false }
        ]
    },
    {
        id: 586,
        category: "Struktury liniowe",
        text: "Jaką strategię obsługi elementów realizuje Stos (Stack)?",
        options: [
            { text: "LIFO — Last In, First Out.", isCorrect: true },
            { text: "FIFO — First In, First Out.", isCorrect: false },
            { text: "Priorytetową wg wagi klucza.", isCorrect: false },
            { text: "Losową.", isCorrect: false }
        ]
    },
    {
        id: 587,
        category: "Struktury liniowe",
        text: "Jaką strategię obsługi elementów realizuje Kolejka (Queue)?",
        options: [
            { text: "FIFO — First In, First Out.", isCorrect: true },
            { text: "LIFO — Last In, First Out.", isCorrect: false },
            { text: "Priorytetową wg wagi klucza.", isCorrect: false },
            { text: "Losową.", isCorrect: false }
        ]
    },
    {
        id: 588,
        category: "Struktury liniowe",
        text: "Jaka jest złożoność operacji Push i Pop na prawidłowo zaimplementowanym stosie?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 589,
        category: "Struktury liniowe",
        text: "Jaka jest pesymistyczna złożoność wyszukiwania wartości w jednokierunkowej liście wiązanej?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 590,
        category: "Struktury liniowe",
        text: "Czym różni się lista dwukierunkowa od jednokierunkowej?",
        options: [
            { text: "Każdy węzeł ma dodatkowo wskaźnik na element poprzedni.", isCorrect: true },
            { text: "Nie używa wskaźników, tylko tablicy.", isCorrect: false },
            { text: "Można ją odczytywać wyłącznie od końca.", isCorrect: false },
            { text: "Nie posiada głowy listy.", isCorrect: false }
        ]
    },
    {
        id: 591,
        category: "Kopce",
        text: "Jaka jest podstawowa własność kopca typu Max dla węzła $i$ (poza korzeniem)?",
        options: [
            { text: "$A[Parent(i)] \\ge A[i]$", isCorrect: true },
            { text: "$A[Parent(i)] \\le A[i]$", isCorrect: false },
            { text: "$A[Left(i)] > A[Right(i)]$", isCorrect: false },
            { text: "Wysokość lewego i prawego poddrzewa jest równa.", isCorrect: false }
        ]
    },
    {
        id: 592,
        category: "Kopce",
        text: "Z jaką złożonością działa Build-Max-Heap dla $n$ elementów (metoda oddolna)?",
        options: [
            { text: "$O(n)$", isCorrect: true },
            { text: "$O(n \\log n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 593,
        category: "Kopce",
        text: "Z jaką złożonością działa Max-Heapify?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 594,
        category: "Kopce",
        text: "Ile czasu zajmuje odczytanie (bez usuwania) największej wartości z Max-Heap?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 595,
        category: "Kopce",
        text: "Jaki jest zamortyzowany koszt operacji Decrease-Key w kopcu Fibonacciego?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(n\\log n)$", isCorrect: false }
        ]
    },
    {
        id: 596,
        category: "Kopce",
        text: "W tablicowej reprezentacji kopca (indeksowanie od 1), gdzie znajduje się lewe dziecko węzła $i$?",
        options: [
            { text: "Pod indeksem $2i$.", isCorrect: true },
            { text: "Pod indeksem $2i+1$.", isCorrect: false },
            { text: "Pod indeksem $i/2$.", isCorrect: false },
            { text: "Pod indeksem $i+1$.", isCorrect: false }
        ]
    },
    {
        id: 597,
        category: "Drzewa BST",
        text: "Jaka jest podstawowa własność Binarnego Drzewa Poszukiwań?",
        options: [
            { text: "Dla każdego węzła $x$: klucze lewego poddrzewa $\\le x$, klucze prawego poddrzewa $\\ge x$.", isCorrect: true },
            { text: "Drzewo musi być zawsze idealnie zbalansowane.", isCorrect: false },
            { text: "Węzły nie mogą mieć dwojga dzieci.", isCorrect: false },
            { text: "Korzeń zawsze przechowuje minimum.", isCorrect: false }
        ]
    },
    {
        id: 598,
        category: "Drzewa BST",
        text: "W jakiej kolejności przegląd inorder odwiedza węzły w BST?",
        options: [
            { text: "W kolejności rosnącej wartości kluczy.", isCorrect: true },
            { text: "Korzeń, lewe poddrzewo, prawe poddrzewo.", isCorrect: false },
            { text: "Od liści w kierunku korzenia.", isCorrect: false },
            { text: "Losowo.", isCorrect: false }
        ]
    },
    {
        id: 599,
        category: "Drzewa BST",
        text: "Jaka jest pesymistyczna wysokość BST zbudowanego z $n$ węzłów?",
        options: [
            { text: "$O(n)$ — może zdegenerować się do listy.", isCorrect: true },
            { text: "$O(\\log n)$ zawsze.", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n\\log n)$", isCorrect: false }
        ]
    },
    {
        id: 600,
        category: "Drzewa BST",
        text: "Kiedy dochodzi do degeneracji BST do postaci listy?",
        options: [
            { text: "Gdy elementy są wstawiane w kolejności już posortowanej.", isCorrect: true },
            { text: "Gdy elementy są wstawiane w kolejności losowej.", isCorrect: false },
            { text: "Nigdy — BST zawsze pozostaje zbalansowane.", isCorrect: false },
            { text: "Tylko gdy liczba elementów jest parzysta.", isCorrect: false }
        ]
    },
    {
        id: 601,
        category: "Drzewa AVL",
        text: "Jaki jest główny niezmiennik drzewa AVL?",
        options: [
            { text: "Różnica wysokości lewego i prawego poddrzewa dla każdego węzła wynosi co najwyżej 1.", isCorrect: true },
            { text: "Każdy węzeł ma dokładnie dwoje dzieci.", isCorrect: false },
            { text: "Wysokość drzewa musi być dokładnie $\\log_2 n$.", isCorrect: false },
            { text: "Korzeń zawsze ma współczynnik balansu równy 2.", isCorrect: false }
        ]
    },
    {
        id: 602,
        category: "Drzewa AVL",
        text: "Jakie wartości może przyjmować współczynnik balansu w poprawnym drzewie AVL?",
        options: [
            { text: "$-1$", isCorrect: true },
            { text: "$0$", isCorrect: true },
            { text: "$1$", isCorrect: true },
            { text: "$2$", isCorrect: false }
        ]
    },
    {
        id: 603,
        category: "Drzewa AVL",
        text: "Z jaką złożonością wykonują się Search, Insert i Delete w drzewie AVL?",
        options: [
            { text: "Zawsze $\\Theta(\\log n)$.", isCorrect: true },
            { text: "Zawsze $\\Theta(1)$.", isCorrect: false },
            { text: "Średnio $\\Theta(\\log n)$, pesymistycznie $O(n)$.", isCorrect: false },
            { text: "Zamortyzowanym $O(1)$.", isCorrect: false }
        ]
    },
    {
        id: 604,
        category: "Drzewa AVL",
        text: "Jaka rotacja naprawia drzewo AVL, gdy zaburzenie balansu wystąpiło w lewym poddrzewie lewego dziecka (przypadek LL)?",
        options: [
            { text: "Pojedyncza rotacja w prawo.", isCorrect: true },
            { text: "Pojedyncza rotacja w lewo.", isCorrect: false },
            { text: "Podwójna rotacja Left-Right.", isCorrect: false },
            { text: "Podwójna rotacja Right-Left.", isCorrect: false }
        ]
    },
    {
        id: 605,
        category: "Drzewa Czerwono-Czarne",
        text: "Jakiego koloru musi być korzeń oraz liście NIL w drzewie czerwono-czarnym?",
        options: [
            { text: "Czarnego.", isCorrect: true },
            { text: "Czerwonego.", isCorrect: false },
            { text: "Korzeń czerwony, liście czarne.", isCorrect: false },
            { text: "Zależy od wysokości drzewa.", isCorrect: false }
        ]
    },
    {
        id: 606,
        category: "Drzewa Czerwono-Czarne",
        text: "Jaka zasada dotyczy sąsiedztwa węzłów czerwonych w drzewie RB?",
        options: [
            { text: "Czerwony węzeł nie może mieć czerwonego rodzica ani czerwonego dziecka.", isCorrect: true },
            { text: "Czerwony węzeł musi mieć zawsze dwoje czerwonych dzieci.", isCorrect: false },
            { text: "Liczba czerwonych węzłów musi być parzysta.", isCorrect: false },
            { text: "Nie ma żadnej takiej zasady.", isCorrect: false }
        ]
    },
    {
        id: 607,
        category: "Drzewa Czerwono-Czarne",
        text: "Jaki kolor otrzymuje nowo wstawiany węzeł w drzewie czerwono-czarnym?",
        options: [
            { text: "Czerwony.", isCorrect: true },
            { text: "Czarny.", isCorrect: false },
            { text: "Zależny od koloru rodzica.", isCorrect: false },
            { text: "Losowy.", isCorrect: false }
        ]
    },
    {
        id: 608,
        category: "Drzewa Czerwono-Czarne",
        text: "Z jaką złożonością pesymistyczną działają wyszukiwanie, wstawianie i usuwanie w zbalansowanym drzewie RB?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n\\log n)$", isCorrect: false }
        ]
    },
    {
        id: 609,
        category: "Drzewa: porównanie",
        text: "Dlaczego warto użyć drzewa AVL lub RB zamiast zwykłego BST?",
        options: [
            { text: "Bo gwarantują wysokość $O(\\log n)$ nawet dla posortowanych danych wejściowych.", isCorrect: true },
            { text: "Bo zużywają mniej pamięci niż BST.", isCorrect: false },
            { text: "Bo nie wymagają operacji porównania kluczy.", isCorrect: false },
            { text: "Bo działają wyłącznie na liczbach całkowitych.", isCorrect: false }
        ]
    },
    {
        id: 610,
        category: "Tablice haszujące",
        text: "Czym jest kolizja w tablicy mieszającej?",
        options: [
            { text: "Sytuacją, gdy dwa różne klucze hashują się do tego samego indeksu.", isCorrect: true },
            { text: "Próbą usunięcia nieistniejącego elementu.", isCorrect: false },
            { text: "Przekroczeniem maksymalnego rozmiaru tablicy.", isCorrect: false },
            { text: "Zapętleniem się funkcji haszującej.", isCorrect: false }
        ]
    },
    {
        id: 611,
        category: "Tablice haszujące",
        text: "Na czym polega metoda łańcuchowa (chaining) rozwiązywania kolizji?",
        options: [
            { text: "Elementy trafiające do tego samego slotu przechowywane są na liście wiązanej.", isCorrect: true },
            { text: "Szuka się kolejnej wolnej komórki w tablicy.", isCorrect: false },
            { text: "Nowy element zastępuje stary.", isCorrect: false },
            { text: "Tablica jest natychmiast powiększana.", isCorrect: false }
        ]
    },
    {
        id: 612,
        category: "Tablice haszujące",
        text: "Czym jest adresowanie otwarte (open addressing)?",
        options: [
            { text: "Metodą rozwiązywania kolizji polegającą na szukaniu kolejnego wolnego miejsca w samej tablicy.", isCorrect: true },
            { text: "Metodą przechowywania elementów w listach wiązanych poza tablicą.", isCorrect: false },
            { text: "Sposobem alokacji tablicy w pamięci dynamicznej.", isCorrect: false },
            { text: "Metodą szyfrowania kluczy.", isCorrect: false }
        ]
    },
    {
        id: 613,
        category: "Tablice haszujące",
        text: "Co to jest współczynnik wypełnienia (load factor) $\\alpha$ dla tablicy o rozmiarze $m$ z $n$ elementami?",
        options: [
            { text: "$\\alpha = n/m$", isCorrect: true },
            { text: "$\\alpha = m/n$", isCorrect: false },
            { text: "$\\alpha = n \\bmod m$", isCorrect: false },
            { text: "$\\alpha = m-n$", isCorrect: false }
        ]
    },
    {
        id: 614,
        category: "Tablice haszujące",
        text: "Co to jest primary clustering (pierwotne grupowanie) przy sondowaniu liniowym?",
        options: [
            { text: "Zjawisko tworzenia się długich ciągów zajętych komórek, wydłużające średni czas wyszukiwania.", isCorrect: true },
            { text: "Konieczność alokacji zewnętrznych list wiązanych.", isCorrect: false },
            { text: "Niemożność usunięcia elementu z tablicy.", isCorrect: false },
            { text: "Konieczność użycia dwóch funkcji haszujących.", isCorrect: false }
        ]
    },
    {
        id: 615,
        category: "Tablice haszujące",
        text: "Jaki jest średni czas wyszukiwania przy zastosowaniu doskonałej funkcji haszującej (perfect hashing)?",
        options: [
            { text: "$O(1)$ nawet w najgorszym przypadku.", isCorrect: true },
            { text: "$O(\\log n)$ w najgorszym przypadku.", isCorrect: false },
            { text: "Średnio $O(1)$, pesymistycznie $O(n)$.", isCorrect: false },
            { text: "Zawsze $O(n)$.", isCorrect: false }
        ]
    },
    {
        id: 616,
        category: "Skip Lists",
        text: "Jakie jest główne przeznaczenie List Przeskakiwania (Skip Lists)?",
        options: [
            { text: "Probabilistyczna alternatywa dla zbalansowanych drzew BST z oczekiwanym czasem $O(\\log n)$.", isCorrect: true },
            { text: "Wyznaczanie cykli w grafach.", isCorrect: false },
            { text: "Stabilne sortowanie w czasie liniowym.", isCorrect: false },
            { text: "Rozwiązywanie kolizji w tablicach haszujących.", isCorrect: false }
        ]
    },
    {
        id: 617,
        category: "Skip Lists",
        text: "Skąd pochodzi wysokość (liczba wskaźników) nowo wstawianego węzła w Skip List?",
        options: [
            { text: "Jest losowana (np. rzutem monetą / funkcją pseudolosową).", isCorrect: true },
            { text: "Jest zawsze równa maksymalnemu poziomowi listy.", isCorrect: false },
            { text: "Zależy od wartości klucza.", isCorrect: false },
            { text: "Jest pobierana z poziomu poprzedniego węzła.", isCorrect: false }
        ]
    },
    {
        id: 618,
        category: "Statystyki pozycyjne",
        text: "Czym jest $i$-ta statystyka pozycyjna zbioru $n$-elementowego?",
        options: [
            { text: "Elementem, który zająłby $i$-tą pozycję w posortowanym ciągu.", isCorrect: true },
            { text: "Różnicą maksimum i minimum zbioru.", isCorrect: false },
            { text: "Wartością najczęściej występującą w zbiorze.", isCorrect: false },
            { text: "Sumą $i$ pierwszych elementów.", isCorrect: false }
        ]
    },
    {
        id: 619,
        category: "Statystyki pozycyjne",
        text: "Za pomocą jakiego algorytmu można znaleźć $i$-tą statystykę pozycyjną w oczekiwanym czasie liniowym?",
        options: [
            { text: "Randomized Select (Quickselect).", isCorrect: true },
            { text: "Algorytmu Prima.", isCorrect: false },
            { text: "Kopca binarnego z $i$-krotnym Extract-Min.", isCorrect: false },
            { text: "Standardowego Merge Sorta.", isCorrect: false }
        ]
    },
    {
        id: 620,
        category: "Statystyki pozycyjne",
        text: "Jakiego algorytmu używa się do znalezienia statystyki pozycyjnej w gwarantowanym czasie liniowym $O(n)$ w najgorszym przypadku?",
        options: [
            { text: "Algorytmu \"Magicznych Piątek\" (median of medians).", isCorrect: true },
            { text: "Randomized Select bez modyfikacji.", isCorrect: false },
            { text: "Zwykłego Quicksorta.", isCorrect: false },
            { text: "Heapsorta.", isCorrect: false }
        ]
    },
    {
        id: 621,
        category: "Drzewa przedziałowe",
        text: "Jaki dodatkowy atrybut przechowuje węzeł w drzewie przedziałowym (Interval Tree), by wyszukiwanie przecięć działało w $O(\\log n)$?",
        options: [
            { text: "`max` — maksymalny prawy koniec przedziału w poddrzewie.", isCorrect: true },
            { text: "`size` — liczba elementów w poddrzewie.", isCorrect: false },
            { text: "`color` — kolor jak w drzewie RB.", isCorrect: false },
            { text: "Tablicę wszystkich pokrywających się przedziałów.", isCorrect: false }
        ]
    },
    {
        id: 622,
        category: "Grafy: podstawy",
        text: "Z jakich zbiorów zbudowany jest graf $G=(V,E)$?",
        options: [
            { text: "Ze zbioru wierzchołków $V$ i zbioru krawędzi $E$.", isCorrect: true },
            { text: "Ze zbioru wektorów i macierzy.", isCorrect: false },
            { text: "Ze zbioru liści i korzeni.", isCorrect: false },
            { text: "Ze zbioru operacji i zmiennych.", isCorrect: false }
        ]
    },
    {
        id: 623,
        category: "Grafy: reprezentacja",
        text: "Kiedy warto użyć macierzy sąsiedztwa zamiast listy sąsiedztwa?",
        options: [
            { text: "Dla grafów gęstych i gdy potrzebne jest szybkie ($O(1)$) sprawdzenie istnienia krawędzi.", isCorrect: true },
            { text: "Dla grafów rzadkich, by oszczędzić pamięć.", isCorrect: false },
            { text: "Zawsze — macierz sąsiedztwa jest lepsza w każdym przypadku.", isCorrect: false },
            { text: "Tylko dla grafów nieskierowanych bez wag.", isCorrect: false }
        ]
    },
    {
        id: 624,
        category: "Grafy: reprezentacja",
        text: "Jaka jest złożoność pamięciowa listy sąsiedztwa dla grafu z $V$ wierzchołkami i $E$ krawędziami?",
        options: [
            { text: "$\\Theta(V+E)$", isCorrect: true },
            { text: "$\\Theta(V^2)$", isCorrect: false },
            { text: "$\\Theta(E^2)$", isCorrect: false },
            { text: "$\\Theta(1)$", isCorrect: false }
        ]
    },
    {
        id: 625,
        category: "Grafy: BFS",
        text: "Do czego służy algorytm BFS (przeszukiwanie wszerz)?",
        options: [
            { text: "Do znajdowania najkrótszych ścieżek (liczba krawędzi) od źródła w grafie nieważonym.", isCorrect: true },
            { text: "Do sortowania topologicznego grafu DAG.", isCorrect: false },
            { text: "Do znajdowania minimalnego drzewa rozpinającego.", isCorrect: false },
            { text: "Do wykrywania cykli o ujemnej wadze.", isCorrect: false }
        ]
    },
    {
        id: 626,
        category: "Grafy: BFS",
        text: "Jaka struktura danych jest kluczowa w implementacji BFS?",
        options: [
            { text: "Kolejka (Queue, FIFO).", isCorrect: true },
            { text: "Stos (Stack, LIFO).", isCorrect: false },
            { text: "Kopiec Fibonacciego.", isCorrect: false },
            { text: "Tablica haszująca.", isCorrect: false }
        ]
    },
    {
        id: 627,
        category: "Grafy: BFS",
        text: "Jaka jest złożoność BFS dla reprezentacji listą sąsiedztwa?",
        options: [
            { text: "$\\Theta(V+E)$", isCorrect: true },
            { text: "$\\Theta(V^2)$", isCorrect: false },
            { text: "$\\Theta(V \\log V)$", isCorrect: false },
            { text: "$\\Theta(E \\log V)$", isCorrect: false }
        ]
    },
    {
        id: 628,
        category: "Grafy: DFS",
        text: "Do czego wykorzystuje się algorytm DFS (przeszukiwanie w głąb)?",
        options: [
            { text: "Do sortowania topologicznego w grafach DAG.", isCorrect: true },
            { text: "Do wykrywania cykli w grafie.", isCorrect: true },
            { text: "Do znajdowania silnie spójnych składowych.", isCorrect: true },
            { text: "Do znajdowania najkrótszej ścieżki w grafach ważonych.", isCorrect: false }
        ]
    },
    {
        id: 629,
        category: "Grafy: DFS",
        text: "Jakie dwa znaczniki czasowe przypisuje DFS każdemu wierzchołkowi?",
        options: [
            { text: "Czas odkrycia $d[v]$ i czas zakończenia $f[v]$.", isCorrect: true },
            { text: "Dystans od źródła i priorytet w kolejce.", isCorrect: false },
            { text: "Stopień wejściowy i wyjściowy.", isCorrect: false },
            { text: "Wagę krawędzi wchodzącej i wychodzącej.", isCorrect: false }
        ]
    },
    {
        id: 630,
        category: "Grafy: DFS",
        text: "Jaka krawędź $(u,v)$ w DFS wskazuje na obecność cyklu w grafie skierowanym?",
        options: [
            { text: "Krawędź powrotna (back edge), gdy $v$ jest przodkiem $u$ i ma kolor szary.", isCorrect: true },
            { text: "Krawędź w przód (forward edge).", isCorrect: false },
            { text: "Krawędź poprzeczna (cross edge).", isCorrect: false },
            { text: "Krawędź drzewowa (tree edge).", isCorrect: false }
        ]
    },
    {
        id: 631,
        category: "Grafy: sortowanie topologiczne",
        text: "Na jakim typie grafu można wykonać sortowanie topologiczne?",
        options: [
            { text: "Tylko na Skierowanym Grafie Acyklicznym (DAG).", isCorrect: true },
            { text: "Na dowolnym grafie nieskierowanym.", isCorrect: false },
            { text: "Tylko na grafie zawierającym cykle.", isCorrect: false },
            { text: "Na dowolnym drzewie binarnym.", isCorrect: false }
        ]
    },
    {
        id: 632,
        category: "Grafy: sortowanie topologiczne",
        text: "Jak wyznacza się porządek topologiczny na podstawie DFS?",
        options: [
            { text: "Wierzchołki odkłada się na początek listy w momencie zakończenia ich przetwarzania (czas $f[v]$).", isCorrect: true },
            { text: "Sortuje się je rosnąco po czasie odkrycia $d[v]$.", isCorrect: false },
            { text: "Wybiera się wierzchołki o najmniejszym stopniu wejściowym metodą BFS.", isCorrect: false },
            { text: "Sortuje się je według wag krawędzi wychodzących.", isCorrect: false }
        ]
    },
    {
        id: 633,
        category: "Minimalne Drzewo Rozpinające",
        text: "Czym jest Minimalne Drzewo Rozpinające (MST) dla spójnego grafu ważonego?",
        options: [
            { text: "Podzbiorem krawędzi bez cykli łączącym wszystkie wierzchołki o minimalnej sumie wag.", isCorrect: true },
            { text: "Drzewem najkrótszych ścieżek od zadanego korzenia.", isCorrect: false },
            { text: "Grafem po usunięciu wszystkich ujemnych krawędzi.", isCorrect: false },
            { text: "Podgrafem zawierającym tylko jeden cykl.", isCorrect: false }
        ]
    },
    {
        id: 634,
        category: "Minimalne Drzewo Rozpinające",
        text: "Ile krawędzi zawiera drzewo rozpinające grafu o $V$ wierzchołkach?",
        options: [
            { text: "$V-1$", isCorrect: true },
            { text: "$V$", isCorrect: false },
            { text: "$V+1$", isCorrect: false },
            { text: "$V(V-1)/2$", isCorrect: false }
        ]
    },
    {
        id: 635,
        category: "MST: Algorytm Kruskala",
        text: "Jak działa algorytm Kruskala?",
        options: [
            { text: "Sortuje krawędzie rosnąco wg wag i dodaje je zachłannie, o ile nie tworzą cyklu.", isCorrect: true },
            { text: "Wybiera wierzchołek startowy i dołącza najtańsze krawędzie z niego wychodzące.", isCorrect: false },
            { text: "Relaksuje wszystkie krawędzie tak jak Bellman-Ford.", isCorrect: false },
            { text: "Szuka minimalnego przekroju w sieci przepływowej.", isCorrect: false }
        ]
    },
    {
        id: 636,
        category: "MST: Algorytm Kruskala",
        text: "Jakiej struktury danych używa Kruskal do sprawdzania, czy dodanie krawędzi utworzy cykl?",
        options: [
            { text: "Struktury zbiorów rozłącznych (Union-Find).", isCorrect: true },
            { text: "Kopca binarnego.", isCorrect: false },
            { text: "Drzewa przedziałowego.", isCorrect: false },
            { text: "Tablicy haszującej.", isCorrect: false }
        ]
    },
    {
        id: 637,
        category: "MST: Algorytm Prima",
        text: "Jak działa algorytm Prima?",
        options: [
            { text: "Startuje z dowolnego wierzchołka i zachłannie dołącza najtańszą krawędź łączącą drzewo z nowym wierzchołkiem.", isCorrect: true },
            { text: "Sortuje wszystkie krawędzie i dodaje je bez tworzenia cykli.", isCorrect: false },
            { text: "Relaksuje krawędzie $|V|-1$ razy.", isCorrect: false },
            { text: "Wymaga ujemnych wag krawędzi.", isCorrect: false }
        ]
    },
    {
        id: 638,
        category: "MST: Algorytm Prima",
        text: "Do jakiego algorytmu (strukturalnie) podobny jest algorytm Prima?",
        options: [
            { text: "Do algorytmu Dijkstry.", isCorrect: true },
            { text: "Do algorytmu Kruskala.", isCorrect: false },
            { text: "Do algorytmu Bellmana-Forda.", isCorrect: false },
            { text: "Do algorytmu Floyda-Warshalla.", isCorrect: false }
        ]
    },
    {
        id: 639,
        category: "MST: Zbiory rozłączne",
        text: "Które heurystyki przyspieszają operacje na strukturze zbiorów rozłącznych?",
        options: [
            { text: "Łączenie według rangi (Union by rank).", isCorrect: true },
            { text: "Kompresja ścieżki (Path compression).", isCorrect: true },
            { text: "Haszowanie dwukrotne.", isCorrect: false },
            { text: "Sondowanie kwadratowe.", isCorrect: false }
        ]
    },
    {
        id: 640,
        category: "Najkrótsze ścieżki: Relaksacja",
        text: "Na czym polega operacja relaksacji krawędzi $(u,v)$?",
        options: [
            { text: "Sprawdza, czy dystans do $v$ można skrócić przez $u$, i jeśli tak — aktualizuje $d[v]$.", isCorrect: true },
            { text: "Usuwa krawędź z grafu.", isCorrect: false },
            { text: "Zamienia wagę krawędzi na wartość ujemną.", isCorrect: false },
            { text: "Dodaje krawędź do drzewa MST.", isCorrect: false }
        ]
    },
    {
        id: 641,
        category: "Algorytm Dijkstry",
        text: "Jakich wag krawędzi wymaga algorytm Dijkstry, by działać poprawnie?",
        options: [
            { text: "Wyłącznie wag nieujemnych.", isCorrect: true },
            { text: "Dowolnych wag, byle nie było ujemnych cykli.", isCorrect: false },
            { text: "Wyłącznie wag całkowitych.", isCorrect: false },
            { text: "Dowolnych wag, w tym ujemnych.", isCorrect: false }
        ]
    },
    {
        id: 642,
        category: "Algorytm Dijkstry",
        text: "Dlaczego Dijkstra nie działa poprawnie na grafach z ujemnymi wagami?",
        options: [
            { text: "Bo po zdjęciu wierzchołka z kolejki priorytetowej algorytm uznaje jego dystans za ostateczny, co ujemna krawędź mogłaby podważyć.", isCorrect: true },
            { text: "Bo kolejki priorytetowe nie mogą przechowywać ujemnych kluczy.", isCorrect: false },
            { text: "Bo powoduje to dzielenie przez zero.", isCorrect: false },
            { text: "Bo Dijkstra działa tylko na grafach nieskierowanych.", isCorrect: false }
        ]
    },
    {
        id: 643,
        category: "Algorytm Dijkstry",
        text: "Jaka jest złożoność Dijkstry z użyciem kopca binarnego?",
        options: [
            { text: "$O((V+E)\\log V)$", isCorrect: true },
            { text: "$O(V^2)$ zawsze niezależnie od implementacji.", isCorrect: false },
            { text: "$O(V \\cdot E)$", isCorrect: false },
            { text: "$O(E)$", isCorrect: false }
        ]
    },
    {
        id: 644,
        category: "Algorytm Bellmana-Forda",
        text: "Ile iteracji relaksacji wszystkich krawędzi wykonuje główna pętla algorytmu Bellmana-Forda?",
        options: [
            { text: "$|V|-1$", isCorrect: true },
            { text: "$|E|$", isCorrect: false },
            { text: "$|V|$", isCorrect: false },
            { text: "$|V|+|E|$", isCorrect: false }
        ]
    },
    {
        id: 645,
        category: "Algorytm Bellmana-Forda",
        text: "Jak Bellman-Ford wykrywa cykl o ujemnej wadze osiągalny ze źródła?",
        options: [
            { text: "Wykonuje dodatkowy przebieg relaksacji — jeśli jakikolwiek dystans wciąż maleje, istnieje ujemny cykl.", isCorrect: true },
            { text: "Sprawdza, czy suma wszystkich wag jest ujemna.", isCorrect: false },
            { text: "Zlicza liczbę krawędzi ujemnych w grafie.", isCorrect: false },
            { text: "Nie potrafi wykryć ujemnych cykli.", isCorrect: false }
        ]
    },
    {
        id: 646,
        category: "Algorytm Bellmana-Forda",
        text: "Jaka jest przewaga Bellmana-Forda nad Dijkstrą?",
        options: [
            { text: "Obsługuje grafy z ujemnymi wagami krawędzi (bez ujemnych cykli osiągalnych).", isCorrect: true },
            { text: "Ma niższą złożoność czasową.", isCorrect: false },
            { text: "Nie wymaga inicjalizacji dystansów.", isCorrect: false },
            { text: "Działa wyłącznie na grafach nieważonych.", isCorrect: false }
        ]
    },
    {
        id: 647,
        category: "Algorytm Floyda-Warshalla",
        text: "Jaki problem rozwiązuje algorytm Floyda-Warshalla?",
        options: [
            { text: "Najkrótsze ścieżki między wszystkimi parami wierzchołków.", isCorrect: true },
            { text: "Minimalne drzewo rozpinające.", isCorrect: false },
            { text: "Maksymalny przepływ w sieci.", isCorrect: false },
            { text: "Sortowanie topologiczne grafu.", isCorrect: false }
        ]
    },
    {
        id: 648,
        category: "Algorytm Floyda-Warshalla",
        text: "Jaka jest złożoność czasowa Floyda-Warshalla?",
        options: [
            { text: "$\\Theta(V^3)$", isCorrect: true },
            { text: "$\\Theta(V^2)$", isCorrect: false },
            { text: "$\\Theta(V \\log V)$", isCorrect: false },
            { text: "$\\Theta(E \\log V)$", isCorrect: false }
        ]
    },
    {
        id: 649,
        category: "Najkrótsze ścieżki w DAG",
        text: "Jaki jest pierwszy krok przy wyznaczaniu najkrótszych ścieżek w grafie DAG?",
        options: [
            { text: "Posortowanie wierzchołków topologicznie.", isCorrect: true },
            { text: "Zbudowanie kopca Fibonacciego.", isCorrect: false },
            { text: "Zamiana wszystkich wag na wartości dodatnie.", isCorrect: false },
            { text: "Uruchomienie BFS w celu sprawdzenia acykliczności.", isCorrect: false }
        ]
    },
    {
        id: 650,
        category: "Najkrótsze ścieżki w DAG",
        text: "Jaka jest złożoność czasowa wyznaczania najkrótszych ścieżek z jednego źródła w grafie DAG?",
        options: [
            { text: "$\\Theta(V+E)$", isCorrect: true },
            { text: "$\\Theta(V^2)$", isCorrect: false },
            { text: "$\\Theta(E \\log V)$", isCorrect: false },
            { text: "$\\Theta(V^3)$", isCorrect: false }
        ]
    },
    {
        id: 651,
        category: "Sieci przepływowe",
        text: "Co oznacza przepustowość krawędzi $c(u,v)$ w sieci przepływowej?",
        options: [
            { text: "Maksymalną wartość przepływu, jaka może być przesłana z $u$ do $v$.", isCorrect: true },
            { text: "Minimalny wymagany przepływ na krawędzi.", isCorrect: false },
            { text: "Odległość między wierzchołkami $u$ i $v$.", isCorrect: false },
            { text: "Liczbę ścieżek między $u$ i $v$.", isCorrect: false }
        ]
    },
    {
        id: 652,
        category: "Sieci przepływowe",
        text: "Czym jest ścieżka powiększająca (augmenting path)?",
        options: [
            { text: "Ścieżką ze źródła $s$ do ujścia $t$ w grafie residualnym, wzdłuż której można zwiększyć przepływ.", isCorrect: true },
            { text: "Najkrótszą ścieżką w grafie DAG.", isCorrect: false },
            { text: "Ścieżką w drzewie MST o najmniejszym koszcie.", isCorrect: false },
            { text: "Cyklem Eulera w sieci.", isCorrect: false }
        ]
    },
    {
        id: 653,
        category: "Sieci przepływowe",
        text: "Do czego służy algorytm Forda-Fulkersona?",
        options: [
            { text: "Do znajdowania maksymalnego przepływu w sieci przepływowej.", isCorrect: true },
            { text: "Do znajdowania najkrótszej ścieżki w sieci o ujemnych wagach.", isCorrect: false },
            { text: "Do budowy minimalnego drzewa rozpinającego.", isCorrect: false },
            { text: "Do sprawdzania, czy graf jest dwudzielny.", isCorrect: false }
        ]
    },
    {
        id: 654,
        category: "Sieci przepływowe",
        text: "Na czym polega Twierdzenie Max-Flow Min-Cut?",
        options: [
            { text: "Wartość maksymalnego przepływu jest równa pojemności minimalnego przekroju w sieci.", isCorrect: true },
            { text: "Maksymalny przepływ jest zawsze równy sumie wag wszystkich krawędzi.", isCorrect: false },
            { text: "Minimalny przekrój zawsze zawiera dokładnie jedną krawędź.", isCorrect: false },
            { text: "Dotyczy wyłącznie grafów acyklicznych.", isCorrect: false }
        ]
    },
    {
        id: 655,
        category: "Sieci przepływowe",
        text: "Czym różni się Edmonds-Karp od klasycznego Forda-Fulkersona?",
        options: [
            { text: "Do szukania ścieżek powiększających używa BFS (najkrótsza ścieżka), co gwarantuje złożoność wielomianową.", isCorrect: true },
            { text: "Używa Dijkstry z kopcem Fibonacciego.", isCorrect: false },
            { text: "Sortuje krawędzie malejąco przed każdą iteracją.", isCorrect: false },
            { text: "Wprowadza losowe wagi krawędzi.", isCorrect: false }
        ]
    },
    {
        id: 656,
        category: "Skojarzenia w grafach dwudzielnych",
        text: "Jak sprowadza się problem maksymalnego skojarzenia w grafie dwudzielnym do problemu przepływu?",
        options: [
            { text: "Dodaje się super-źródło połączone z lewym zbiorem i super-ujście połączone z prawym zbiorem, każde krawędzią o pojemności 1.", isCorrect: true },
            { text: "Ustawia się wszystkie wagi krawędzi na $\\infty$.", isCorrect: false },
            { text: "Usuwa się wszystkie krawędzie powrotne.", isCorrect: false },
            { text: "Łączy się wszystkie wierzchołki w jeden cykl.", isCorrect: false }
        ]
    },
    {
        id: 657,
        category: "Algorytmy tekstowe: naiwny",
        text: "Jaka jest pesymistyczna złożoność naiwnego algorytmu wyszukiwania wzorca o długości $m$ w tekście o długości $n$?",
        options: [
            { text: "$O((n-m+1)\\cdot m)$", isCorrect: true },
            { text: "$O(n+m)$", isCorrect: false },
            { text: "$O(n \\log m)$", isCorrect: false },
            { text: "$O(n)$", isCorrect: false }
        ]
    },
    {
        id: 658,
        category: "Algorytmy tekstowe: Rabin-Karp",
        text: "Na czym opiera się algorytm Rabina-Karpa?",
        options: [
            { text: "Na porównywaniu skrótów (hashy) okna tekstu ze skrótem wzorca, przy użyciu rolling hash.", isCorrect: true },
            { text: "Na budowie automatu skończonego dla wzorca.", isCorrect: false },
            { text: "Na przesuwaniu wzorca od prawej do lewej strony.", isCorrect: false },
            { text: "Na budowie drzewa przedziałowego dla tekstu.", isCorrect: false }
        ]
    },
    {
        id: 659,
        category: "Algorytmy tekstowe: Rabin-Karp",
        text: "Czym jest fałszywe trafienie (spurious hit) w Rabinie-Karpie?",
        options: [
            { text: "Sytuacją, gdy hashe się zgadzają, ale rzeczywiste ciągi znaków są różne.", isCorrect: true },
            { text: "Błędem obliczenia funkcji modulo.", isCorrect: false },
            { text: "Sytuacją, gdy wzorzec nie zostaje odnaleziony wcale.", isCorrect: false },
            { text: "Przepełnieniem bufora tekstu.", isCorrect: false }
        ]
    },
    {
        id: 660,
        category: "Algorytmy tekstowe: KMP",
        text: "Co eliminuje algorytm KMP w porównaniu do wyszukiwania naiwnego?",
        options: [
            { text: "Konieczność cofania wskaźnika w przeglądanym tekście.", isCorrect: true },
            { text: "Konieczność znajomości wzorca przed uruchomieniem.", isCorrect: false },
            { text: "Potrzebę porównywania jakichkolwiek znaków.", isCorrect: false },
            { text: "Wrażliwość na wielkość liter.", isCorrect: false }
        ]
    },
    {
        id: 661,
        category: "Algorytmy tekstowe: KMP",
        text: "Co przechowuje tablica $\\pi[q]$ (funkcja prefiksowa) w algorytmie KMP?",
        options: [
            { text: "Długość najdłuższego właściwego prefiksu wzorca, będącego jednocześnie jego sufiksem do pozycji $q$.", isCorrect: true },
            { text: "Indeks, o który przesuwane jest okno tekstu.", isCorrect: false },
            { text: "Liczbę powtórzeń danego znaku we wzorcu.", isCorrect: false },
            { text: "Pozycję ostatniego wystąpienia znaku w alfabecie.", isCorrect: false }
        ]
    },
    {
        id: 662,
        category: "Algorytmy tekstowe: KMP",
        text: "Jaka jest złożoność czasowa samego wyszukiwania (bez budowy tablicy $\\pi$) w algorytmie KMP?",
        options: [
            { text: "$\\Theta(n)$", isCorrect: true },
            { text: "$\\Theta(nm)$", isCorrect: false },
            { text: "$\\Theta(n \\log m)$", isCorrect: false },
            { text: "$\\Theta(m^2)$", isCorrect: false }
        ]
    },
    {
        id: 663,
        category: "Algorytmy tekstowe: Boyer-Moore",
        text: "Z jakich heurystyk korzysta algorytm Boyera-Moore'a?",
        options: [
            { text: "Heurystyki złego znaku (bad character).", isCorrect: true },
            { text: "Heurystyki dobrego sufiksu (good suffix).", isCorrect: true },
            { text: "Tablicy prefikso-sufiksowej $\\pi$.", isCorrect: false },
            { text: "Rolling hash.", isCorrect: false }
        ]
    },
    {
        id: 664,
        category: "Algorytmy tekstowe: Boyer-Moore",
        text: "W jakim kierunku Boyer-Moore porównuje znaki wzorca z tekstem?",
        options: [
            { text: "Od prawej do lewej strony wzorca.", isCorrect: true },
            { text: "Od lewej do prawej strony wzorca.", isCorrect: false },
            { text: "Od środka wzorca w obie strony.", isCorrect: false },
            { text: "Kolejność jest losowa.", isCorrect: false }
        ]
    },
    {
        id: 665,
        category: "Kompresja: Huffman",
        text: "Jakie kody generuje algorytm Huffmana?",
        options: [
            { text: "Kody prefiksowe — żadne słowo kodowe nie jest przedrostkiem innego.", isCorrect: true },
            { text: "Kody o stałej długości.", isCorrect: false },
            { text: "Kody słownikowe jak w LZW.", isCorrect: false },
            { text: "Kody wymagające dwukrotnego przejścia przez plik.", isCorrect: false }
        ]
    },
    {
        id: 666,
        category: "Kompresja: Huffman",
        text: "Jakiej struktury danych używa algorytm Huffmana do budowy drzewa kodowego?",
        options: [
            { text: "Kolejki priorytetowej (Min-Heap).", isCorrect: true },
            { text: "Stosu.", isCorrect: false },
            { text: "Drzewa BST.", isCorrect: false },
            { text: "Tablicy haszującej.", isCorrect: false }
        ]
    },
    {
        id: 667,
        category: "Kompresja: Huffman",
        text: "Jak w optymalnym kodzie Huffmana wygląda kod dla znaku występującego bardzo często?",
        options: [
            { text: "Otrzymuje krótki kod bitowy.", isCorrect: true },
            { text: "Otrzymuje długi kod bitowy.", isCorrect: false },
            { text: "Ma taką samą długość kodu jak wszystkie inne znaki.", isCorrect: false },
            { text: "Nie jest w ogóle kodowany.", isCorrect: false }
        ]
    },
    {
        id: 668,
        category: "Kompresja: LZW",
        text: "Na czym polega główna idea kompresji LZW?",
        options: [
            { text: "Buduje słownik ciągów znaków w locie, bez potrzeby jego wcześniejszej znajomości.", isCorrect: true },
            { text: "Wymaga dwukrotnego przejścia przez plik: policzenia częstości, a potem kodowania.", isCorrect: false },
            { text: "Generuje zawsze optymalne drzewo binarne minimalizujące entropię.", isCorrect: false },
            { text: "Działa wyłącznie na danych multimedialnych.", isCorrect: false }
        ]
    },
    {
        id: 669,
        category: "Kompresja: teoria informacji",
        text: "Co określa entropia Shannona w kontekście kompresji tekstu?",
        options: [
            { text: "Teoretyczną dolną granicę średniej liczby bitów potrzebnych do zakodowania jednego symbolu.", isCorrect: true },
            { text: "Dokładny rozmiar skompresowanego pliku w bajtach.", isCorrect: false },
            { text: "Liczbę węzłów w drzewie Huffmana.", isCorrect: false },
            { text: "Współczynnik kompresji obrazów rastrowych.", isCorrect: false }
        ]
    },
    {
        id: 670,
        category: "Algorytmy zrandomizowane",
        text: "Jaki rodzaj czasu działania bada się najczęściej dla algorytmów zrandomizowanych?",
        options: [
            { text: "Oczekiwany (expected) czas działania.", isCorrect: true },
            { text: "Czas amortyzowany.", isCorrect: false },
            { text: "Dokładny czas pesymistyczny.", isCorrect: false },
            { text: "Czas optymistyczny.", isCorrect: false }
        ]
    },
    {
        id: 671,
        category: "Algorytmy zrandomizowane",
        text: "W jakim celu stosuje się randomizację w algorytmach takich jak Randomized Quicksort?",
        options: [
            { text: "Aby uniezależnić zachowanie algorytmu od konkretnego, np. pesymistycznego, ułożenia danych wejściowych.", isCorrect: true },
            { text: "Aby zagwarantować zawsze optymalny czas wykonania.", isCorrect: false },
            { text: "Aby zmniejszyć złożoność pamięciową do zera.", isCorrect: false },
            { text: "Aby pominąć etap porównywania elementów.", isCorrect: false }
        ]
    },
    {
        id: 672,
        category: "Architektury równoległe",
        text: "Co charakteryzuje architekturę SIMD w taksonomii Flynna?",
        options: [
            { text: "Jeden strumień instrukcji jest wykonywany równocześnie na wielu różnych danych.", isCorrect: true },
            { text: "Wiele procesorów wykonuje różne instrukcje na tych samych danych.", isCorrect: false },
            { text: "Jeden procesor wykonuje jedną instrukcję na jednych danych.", isCorrect: false },
            { text: "Wiele niezależnych strumieni instrukcji operuje na różnych danych.", isCorrect: false }
        ]
    },
    {
        id: 673,
        category: "Architektury równoległe",
        text: "Co oznacza skrót PRAM?",
        options: [
            { text: "Parallel Random Access Machine — abstrakcyjny model komputera z wieloma procesorami dzielącymi wspólną pamięć.", isCorrect: true },
            { text: "Program Random Access Memory.", isCorrect: false },
            { text: "Parallel Recursive Algorithm Model.", isCorrect: false },
            { text: "Process Ranking And Memory.", isCorrect: false }
        ]
    },
    {
        id: 674,
        category: "Podstawy",
        text: "Czym różni się algorytm stabilny od niestabilnego przy sortowaniu?",
        options: [
            { text: "Stabilny zachowuje względną kolejność elementów o równych kluczach.", isCorrect: true },
            { text: "Stabilny działa szybciej niż niestabilny.", isCorrect: false },
            { text: "Stabilny zawsze sortuje w miejscu.", isCorrect: false },
            { text: "Niestabilny zawsze ma złożoność $O(n^2)$.", isCorrect: false }
        ]
    },
    {
        id: 675,
        category: "Podstawy",
        text: "Co oznacza, że algorytm sortuje \"w miejscu\" (in-place)?",
        options: [
            { text: "Wymaga tylko stałej ilości dodatkowej pamięci ($O(1)$).", isCorrect: true },
            { text: "Nigdy nie zamienia elementów miejscami.", isCorrect: false },
            { text: "Działa wyłącznie na tablicach jednoelementowych.", isCorrect: false },
            { text: "Wymaga dokładnie takiej samej pamięci jak rozmiar danych wejściowych razy 2.", isCorrect: false }
        ]
    },
    {
        id: 676,
        category: "Podstawy",
        text: "Jaka jest złożoność dostępu do $i$-tego elementu w zwykłej tablicy (znając indeks)?",
        options: [
            { text: "$O(1)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(\\log n)$", isCorrect: false },
            { text: "$O(n^2)$", isCorrect: false }
        ]
    },
    {
        id: 677,
        category: "Podstawy",
        text: "Który z algorytmów NIE jest algorytmem sortowania?",
        options: [
            { text: "Dijkstra.", isCorrect: true },
            { text: "Quicksort.", isCorrect: false },
            { text: "Merge Sort.", isCorrect: false },
            { text: "Heapsort.", isCorrect: false }
        ]
    },
    {
        id: 678,
        category: "Podstawy",
        text: "Ile wynosi $\\log_2 1024$?",
        options: [
            { text: "10", isCorrect: true },
            { text: "8", isCorrect: false },
            { text: "16", isCorrect: false },
            { text: "1024", isCorrect: false }
        ]
    },
    {
        id: 679,
        category: "Podstawy",
        text: "Czym jest korzeń w strukturze drzewa?",
        options: [
            { text: "Jedynym węzłem, który nie ma rodzica.", isCorrect: true },
            { text: "Węzłem bez dzieci.", isCorrect: false },
            { text: "Dowolnym węzłem wewnętrznym.", isCorrect: false },
            { text: "Węzłem o największej wartości.", isCorrect: false }
        ]
    },
    {
        id: 680,
        category: "Podstawy",
        text: "Czym jest liść w strukturze drzewa?",
        options: [
            { text: "Węzłem, który nie posiada żadnych dzieci.", isCorrect: true },
            { text: "Węzłem znajdującym się bezpośrednio pod korzeniem.", isCorrect: false },
            { text: "Węzłem o najmniejszej wartości w drzewie.", isCorrect: false },
            { text: "Węzłem z dokładnie jednym dzieckiem.", isCorrect: false }
        ]
    },
    {
        id: 681,
        category: "Podstawy",
        text: "Ile maksymalnie dzieci może mieć węzeł w drzewie binarnym?",
        options: [
            { text: "2", isCorrect: true },
            { text: "1", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "Dowolnie wiele.", isCorrect: false }
        ]
    },
    {
        id: 682,
        category: "Podstawy",
        text: "Czym jest rekurencja?",
        options: [
            { text: "Sytuacją, w której funkcja wywołuje samą siebie.", isCorrect: true },
            { text: "Powtarzaniem pętli `for` bez warunku stopu.", isCorrect: false },
            { text: "Wykonywaniem programu wielowątkowo.", isCorrect: false },
            { text: "Zapisem danych na dysku.", isCorrect: false }
        ]
    },
    {
        id: 683,
        category: "Podstawy",
        text: "Co gwarantuje, że algorytm rekurencyjny się zakończy?",
        options: [
            { text: "Istnienie przypadku bazowego (warunku stopu).", isCorrect: true },
            { text: "Użycie pętli `while`.", isCorrect: false },
            { text: "Sortowanie danych wejściowych.", isCorrect: false },
            { text: "Zastosowanie tablicy haszującej.", isCorrect: false }
        ]
    },
    {
        id: 684,
        category: "Podstawy",
        text: "Który typ złożoności jest najgorszy (rośnie najszybciej)?",
        options: [
            { text: "$O(n!)$", isCorrect: true },
            { text: "$O(2^n)$", isCorrect: false },
            { text: "$O(n^3)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    },
    {
        id: 685,
        category: "Podstawy",
        text: "Jaką strategię reprezentuje podejście \"dziel i zwyciężaj\"?",
        options: [
            { text: "Podział problemu na mniejsze podproblemy, rozwiązanie ich rekurencyjnie i połączenie wyników.", isCorrect: true },
            { text: "Zachłanne podejmowanie lokalnie najlepszej decyzji na każdym kroku.", isCorrect: false },
            { text: "Zapamiętywanie wyników podproblemów w tablicy.", isCorrect: false },
            { text: "Losowe przeszukiwanie przestrzeni rozwiązań.", isCorrect: false }
        ]
    },
    {
        id: 686,
        category: "Podstawy",
        text: "Które algorytmy opierają się na strategii \"dziel i zwyciężaj\"?",
        options: [
            { text: "Merge Sort.", isCorrect: true },
            { text: "Quicksort.", isCorrect: true },
            { text: "Wyszukiwanie binarne.", isCorrect: true },
            { text: "Bubble Sort.", isCorrect: false }
        ]
    },
    {
        id: 687,
        category: "Podstawy",
        text: "Jaki jest podstawowy warunek stosowania wyszukiwania binarnego?",
        options: [
            { text: "Tablica musi być posortowana.", isCorrect: true },
            { text: "Tablica musi mieć nieparzystą liczbę elementów.", isCorrect: false },
            { text: "Szukana wartość musi być liczbą całkowitą.", isCorrect: false },
            { text: "Tablica nie może zawierać duplikatów.", isCorrect: false }
        ]
    },
    {
        id: 688,
        category: "Podstawy",
        text: "Jaka jest złożoność wyszukiwania binarnego?",
        options: [
            { text: "$O(\\log n)$", isCorrect: true },
            { text: "$O(n)$", isCorrect: false },
            { text: "$O(1)$", isCorrect: false },
            { text: "$O(n \\log n)$", isCorrect: false }
        ]
    }
    ];