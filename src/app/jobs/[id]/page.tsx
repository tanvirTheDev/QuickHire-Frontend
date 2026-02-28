import JobDetail from "@/components/jobs/JobDetail";

interface JobDetailsPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailsPage({ params }: JobDetailsPageProps) {
  return <JobDetail jobId={params.id} />;
}
