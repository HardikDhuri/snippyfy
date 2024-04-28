import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const SnippetCard = () => {
  return (
    <Card className="m-3">
    <CardHeader>
      <CardTitle>Carousal Card in React</CardTitle>
      <CardDescription>A simple description of the code snippet.</CardDescription>
    </CardHeader>
    <CardContent>
      <Button>View</Button>
    </CardContent>
  </Card>
  )
}

export default SnippetCard