import { useNavigate, useParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function Paginationhandler() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentPage = Number(id) || 1; // Convert id to a number (default to page 1)

  const handlePrev = () => {
    if (currentPage > 1) {
      navigate(`/job/${currentPage - 1}`);
    }
  };

  const handleNext = () => {
    navigate(`/job/${currentPage + 1}`);
  };

  return (
    <Pagination>
      <PaginationContent className="flex justify-center items-center gap-4">
        <PaginationItem>
            <PaginationPrevious onClick={handlePrev} />
        </PaginationItem>

        <PaginationItem>
          <span className="px-4 py-2 font-semibold text-lg">{currentPage}</span>
        </PaginationItem>

        <PaginationItem>
            <PaginationNext onClick={handleNext}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default Paginationhandler;
